webui-aria2
===========

![Main interface](http://i.imgur.com/kOVFU7b.png)

The aim for this project is to create the worlds best and hottest interface to interact with aria2. aria2 is the worlds best file downloader, but sometimes the command line brings more power than necessary. The project was created as part of the GSOC scheme with tremendous support and feedback from the aria2 community.

Very simple to use, no build scripts, no installation scripts. First start aria2 in the background either in your local machine or in a remote one. You can do that as follows:
**aria2c --enable-rpc --rpc-listen-all**
If aria2 is not installed in your local machine then head on to http://aria2.sourceforge.net/ and follow the instructions there.

Then download the webui, you can either do that by downloading this repository and running index.html in the browser. Or you could just head on to http://ziahamza.github.com/webui-aria2/ and just start downloading files!! After that you can also save it for offline use by saving from the browser save page as option.


Status
===========
Usable but some bugs here and there. A complete overhaul is underway in the angular.html but its completely broken currently and once it is completed then it would replace the old index.html

TODO
-----------
* Implement all features of the old version into the new architecture in angular.html


Dependencies
============
Well, I guess you cannot run it without aria2 installed locally or on a network location. And not sure if a web browser counts as a dependency on GUI desktops :)

Support
=======
For any support, feature request and bug report add an issue in the github project tab or head on the aria2 forums (https://sourceforge.net/apps/phpbb/aria2) and post your issue there.

License
=======
Refer to the LICENSE file (MIT License). If the more liberal license is needed then add it as an issue
