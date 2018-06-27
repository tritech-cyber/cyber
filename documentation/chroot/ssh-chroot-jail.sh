# Chroot Jail for SSH Access 
# Tested on Ubuntu 14.04.2 LTS and Debian GNU/Linux 8 (jessie)

# Reference : http://allanfeid.com/content/creating-chroot-jail-ssh-access
# 
# Had to add/change several things to make it work, including:
# - create lib64 folder
# - copy whoami dependencies that ldd doesn't show to fix 'I have no name!'
#   in the customized prompt + create passwd file 
#
# All the commands below are typed as root

# Setup the jail directories
mkdir -p /var/jail/{dev,etc,lib,lib64,usr/bin,bin}

# Create null device node
mknod -m 666 /var/jail/dev/null c 1 3

# Copy minimum files
cp /etc/ld.so.{cache,conf} /var/jail/etc/
cp /etc/nsswitch.conf /var/jail/etc/
cp /etc/hosts /var/jail/etc/

# here we just want 'ls' and 'bash' in our chrooted environment
for ii in ls bash; do cp $(which $ii) /var/jail$(which $ii); done

# FHS requires that /bin/sh exists
pushd /var/jail/bin/
ln -s bash sh
popd

# copy library dependencies for the binaries we just copied
# to find out what we need, 'ldd' can be used
# ex: ldd $(which bash)
#	linux-vdso.so.1 =>  (0x00007ffd4c735000)
#	libtinfo.so.5 => /lib/x86_64-linux-gnu/libtinfo.so.5 (0x00007fe0cce9c000)
#	libdl.so.2 => /lib/x86_64-linux-gnu/libdl.so.2 (0x00007fe0ccc98000)
#	libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007fe0cc8d3000)
#	/lib64/ld-linux-x86-64.so.2 (0x00007fe0cd0c5000)

# to avoid manual copy, the l2chroot script can be used:
wget -O /usr/local/sbin/l2chroot http://www.cyberciti.biz/files/lighttpd/l2chroot.txt
chmod 744 /usr/local/sbin/l2chroot

# Edit l2chroot script and change the BASE="/webroot" variable to BASE="/var/jail"
sed -i 's@/webroot@/var/jail@' /usr/local/sbin/l2chroot

# copy library dependencies (with l2chroot)
for ii in ls bash; do l2chroot $(which $ii); done

# Additional dependencies for displaying the name of our user in its prompt
cp /lib/x86_64-linux-gnu/libnsl.so.1 /var/jail/lib/x86_64-linux-gnu/
cp /lib/x86_64-linux-gnu/libnss_* /var/jail/lib/x86_64-linux-gnu/

# Configure sshd to chroot the users
# Add the followind lines in '/etc/ssh/sshd_config'
Match group sshjailed
        ChrootDirectory /var/jail/
        X11Forwarding no
        AllowTcpForwarding no

# Don't forget to restart ssh 
service ssh restart

# Setup group for SSH jailed users
groupadd sshjailed

# All the steps below will have to be done for all users we want to chroot
# Create new user and add it to the sshjailed group
useradd -G sshjailed -d /home/prisoner -s /bin/bash prisoner
passwd prisoner
mkdir -p /var/jail/home/prisoner

# create or update minimal '/etc/passwd' file for our chrooted environment
cat /etc/passwd | grep prisoner >> /var/jail/etc/passwd

# Optional: create minimal but nice prompt for our user(s)
# create the .bashrc and .profile files on /var/jail/home/<user>/

# .bashrc contents
export PS1='\u@\h:\w\$ '

# .profile contents
if [ "$BASH" ]; then
  if [ -f ~/.bashrc ]; then
    . ~/.bashrc
  fi
fi

