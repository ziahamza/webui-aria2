DirectURL
=========
Consider the following scenarios:

1. aria2 is running on a computer that is not locally accessible via the LAN and the files need to be copied from remote aria2 computer to the local computer
2. aria2 is running locally somewhere and setting up samba/nfs/etc is "meh"

HTTP to the rescue, already in the browser right?

Simplest way is to link your download folder or use python to setup an extra http server.

Steps using linked download folder
----------------------------------
1. as part of configuring aria2 to make life easier you will have set the global **dir** option to something like **/home/aria2/downloads**
2. clearly this folder is owned by the user **aria2**
3. open a shell session logged in as **aria2**
4. run ```ln -s /home/aria2/downloads /var/www/aria2/downloads```
5. go to webui-aria2 in your browser (http://serverip:81 - assuming webui-aria2 is running on port 81)
6. go to ```Settings > Connection Settings```
7. scroll down to Direct Download and put ```http://serverip:81/downloads/``` in base URL field _(make sure have the / on the end)_
8. now that URL has been specified all the files will be converted into clickable links
9. checkout the ```more info``` on a download and see for yourself
10. if you click on files that aren't finished downloading **you're going to have a bad day**

Steps using extra http server
-----------------------------
1. as part of configuring aria2 to make life easier you will have set the global **dir** option to something like **/home/aria2/downloads**
2. clearly this folder is owned by the user **aria2**
3. open a shell session logged in as **aria2**
4. run ```cd /home/aria2/downloads```
5. run ```python -m SimpleHTTPServer 8080```
6. webserver is now running on port 8080 and will serve files from the directory the command was run in
7. to test open up http://serverip:8080 - should get a directory listing. any browser errors and something hasn't been done properly, check IP/PORT etc
8. go back to webui-aria2
9. go to ```Settings > Connection Settings```
10. scroll down to Direct Download and put ```http://serverip:8080/``` in base URL field _(make sure have the / on the end)_
11. now that URL has been specified all the files will be converted into clickable links
13. checkout the ```more info``` on a download and see for yourself
14. if you click on files that aren't finished downloading **you're going to have a bad day**
