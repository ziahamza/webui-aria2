webui-aria2
===========

![Main interface](/screenshots/overview.png?raw=true)

The aim for this project is to create the worlds best and hottest interface to interact with aria2. aria2 is the worlds best file downloader, but sometimes the command line brings more power than necessary. The project was initially created as part of the GSOC scheme, however it has rapidly grown and changed with tremendous support and feedback from the aria2 community.

Very simple to use, no build scripts, no installation scripts. First start aria2 in the background either in your local machine or in a remote one. You can do that as follows:
````bash
aria2c --enable-rpc --rpc-listen-all
````


If aria2 is not installed in your local machine then head on to http://aria2.sourceforge.net/ and follow the instructions there.

Then download the webui, you can either do that by downloading this repository and running index.html in the browser. Or you could just head on to http://ziahamza.github.io/webui-aria2/ and just start downloading files! After that you can also save it for offline use by saving from the browser save page as option.

Tips
====
1. You can always select which files to download in case of torrents or metalinks. Just pause a download and a list icon should appear next to the settings button. To select which files to download before starting the download, give the flag --pause-metadata to aria2. See [link](http://aria2.sourceforge.net/manual/en/html/aria2c.html#cmdoption--pause-metadata)

Configuration
=============
Read and edit [configuration.js](configuration.js).

DirectURL
---------
This feature allows users to download files that they download from aria2 directly from the webui dashboard. If you are familiar with how webservers work, setup a http server that points at the configured aria2 download directory, check permissions. Then Specify a full url: ```http://server:port/``` in the webui directURL configuration.

If the above is not obvious, keep reading what this is about in [directurl.md](directurl.md)

Dependencies
============
Well, you need aria2. And a web browser (if that even counts!)

Docker support
==============
You can also try or use webui-aria2 in your LAN inside a Docker sandbox.

Build the image

````bash
sudo docker build -t yourname/webui-aria2 .
````

..and run it! It will be available at: `http://localhost:9100`

````bash
sudo docker run -v /Downloads:/data -p 6800:6800 -p 9100:8080 --name="webui-aria2" yourname/webui-aria2
````

`/Downloads` is the directory in the host where you want to keep the downloaded files

Support
=======
For any support, feature request and bug report add an issue in the github project. [link](https://github.com/ziahamza/webui-aria2/issues)

License
=======
Refer to the LICENSE file (MIT License). If the more liberal license is needed then add it as an issue
