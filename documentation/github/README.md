<pre>
git config --list

git config --global user.username  "monalisa"
git config --global user.name "Mona Lisa"
git config --global user.email "email@example.com"

* * * * * * * * *

ssh key 

use passphrase

ls -al ~/.ssh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
git remote set-url origin git@github.com:icebowl/bash.git



eval `ssh-agent -s` 
ssh-add





</pre>
