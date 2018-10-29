import os 
from pprint import pprint 

files = []
for dirname, dirnames, filenames in os.walk('.'):
    # print path to all subdirectories first.
    for subdirname in dirnames:
        files.append(os.path.join(dirname, subdirname))

    # print path to all filenames.
    for filename in filenames:
        files.append(os.path.join(dirname, filename))


pprint(files)
print (files)
for i in range  (0, len(files)):
	print(files[i])


"""
https://stackoverflow.com/questions/41806350/how-to-store-the-file-names-in-array-from-python

"""
