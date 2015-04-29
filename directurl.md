DirectURL
=========
Consider the following scenarios:

1. aria2 is running on a computer that is not locally accessible via the LAN and the files need to be copied from remote aria2 computer to the local computer
2. aria2 is running locally somewhere and setting up samba/nfs/etc is "meh"

HTTP to the rescue, already in the browser right?

Simplest way is to use a straightforward Node.js library. In the below complete prescription [send](https://github.com/pillarjs/send) will be used.

Requirements
------------
Node.js & NPM

Follow relevant section: [Installing Node.js via package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)

Steps
-----
1. as part of configuring aria2 to make life easier you will have set the global **dir** option to something like **/home/aria2/downloads**
2. clearly this folder is owned by the user **aria2** 
3. open a shell session logged in as **aria2**
4. run ```cd /home/aria2/downloads```
5. run ```npm install send```
6. run ```nano send.js``` or vi if that's your thing
7. paste the content from below **send.js**
8. save the file making changes where appropriate _(follow the comments)_
9. run ```node send.js```
10. webserver is now running on port 3000 and will serve files from the directory specified
11. to test open up http://serverip:3000 - should get a response from the webserver, 2 lines of text, any browser errors and something hasn't been done properly, check IP/PORT etc
12. go back to webui-aria2
13. go to ```Settings > Connection Settings```
14. scroll down to Direct Download and put ```http://serverip:3000/``` in base URL field _(make sure have the / on the end)_
15. now that URL has been specified all the files will be converted into clickable links
16. checkout the ```more info``` on a download and see for yourself
17. if you click on files that aren't finished downloading ```you're going to have a bad day```

### send.js

```js
var http = require('http');
var send = require('send');
var url = require('url');

var app = http.createServer(function(req, res){
  // this one allows the service to fail gracefully and give some feedback
  function error(err) {
    res.statusCode = err.status || 500;
    res.end(err.message);
  }

  // this just makes sure everything is downloaded and not opened in the browser
  function headers(res, path, stat) {
    res.setHeader('Content-Disposition', 'attachment');
  }

  // specify the same directory that aria2 is using to save files
  // not sure exactly how windows paths should be done, see if 'c:\downloads' works..
  send(req, url.parse(req.url).pathname, {root: '/home/aria2/downloads'})
  .on('error', error)
  .on('headers', headers)
  .pipe(res);
}).listen(3000); // change this to .listen(3000,'127.0.0.1') to only respond to localhost requests then access via SSH tunnel or put stunnel in front of it etc
```