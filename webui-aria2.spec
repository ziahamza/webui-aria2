Name:           webui-aria2
Version:        master
Release:        1%{?dist}
Summary:        Web interface for aria2

License:        MIT License
URL:            https://codeload.github.com/ziahamza/webui-aria2
Source0:        https://codeload.github.com/ziahamza/%{name}/tar.gz/%{name}-%{version}.tar.gz

#Requires:       aria2

%description
The aim for this project is to create the worlds best and hottest interface to interact with aria2.
aria2 is the worlds best file downloader, but sometimes the command line brings more power than necessary.
The project was initially created as part of the GSOC scheme, however it has rapidly grown and changed with
tremendous support and feedback from the aria2 community

#%prep
#%setup -q -n %{name}-%{version}

#%build
#%configure
#make %{?_smp_mflags}

%install
tar xvzf %{SOURCE0}
#
mkdir -p $RPM_BUILD_ROOT/usr/share/%{name}
cp -R %{name}-%{version}/css $RPM_BUILD_ROOT/usr/share/%{name}/
cp -R %{name}-%{version}/flags $RPM_BUILD_ROOT/usr/share/%{name}/
cp -R %{name}-%{version}/fonts $RPM_BUILD_ROOT/usr/share/%{name}/
cp -R %{name}-%{version}/img $RPM_BUILD_ROOT/usr/share/%{name}/
cp -R %{name}-%{version}/js $RPM_BUILD_ROOT/usr/share/%{name}/
cp %{name}-%{version}/configuration.js $RPM_BUILD_ROOT/usr/share/%{name}/
cp %{name}-%{version}/favicon.ico $RPM_BUILD_ROOT/usr/share/%{name}/
cp %{name}-%{version}/index.html $RPM_BUILD_ROOT/usr/share/%{name}/
cp %{name}-%{version}/LICENSE $RPM_BUILD_ROOT/usr/share/%{name}/
#
find $RPM_BUILD_ROOT/usr/share/%{name} -type d | xargs chmod 755
find $RPM_BUILD_ROOT/usr/share/%{name} -type f | xargs chmod 644
mkdir -p $RPM_BUILD_ROOT/usr/bin
cat > $RPM_BUILD_ROOT/usr/bin/%{name} <<HERE
#!/usr/bin/env python

import os
import posixpath
import urllib
import BaseHTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler

# modify this to add additional routes
ROUTES = (
##  [url_prefix ,  directory_path]
    ['',       '/usr/share/webui-aria2'],  # empty string for the 'default' match
#   ['/media', '/var/www/media']
)

class RequestHandler(SimpleHTTPRequestHandler):

    def translate_path(self, path):
        """translate path given routes"""

        # set default root to cwd
        root = os.getcwd()

        # look up routes and set root directory accordingly
        for pattern, rootdir in ROUTES:
            if path.startswith(pattern):
                # found match!
                path = path[len(pattern):]  # consume path up to pattern len
                root = rootdir
                break

        # normalize path and prepend root directory
        path = path.split('?',1)[0]
        path = path.split('#',1)[0]
        path = posixpath.normpath(urllib.unquote(path))
        words = path.split('/')
        words = filter(None, words)

        path = root
        for word in words:
            drive, word = os.path.splitdrive(word)
            head, word = os.path.split(word)
            if word in (os.curdir, os.pardir):
                continue
            path = os.path.join(path, word)

        return path

if __name__ == '__main__':
    BaseHTTPServer.test(RequestHandler, BaseHTTPServer.HTTPServer)
HERE
#
mkdir -p $RPM_BUILD_ROOT/usr/lib/systemd/system/
cat > $RPM_BUILD_ROOT/usr/lib/systemd/system/%{name}.service <<HERE
[Unit]
Description=WebUI-Aria2
After=network.target
After=aria2.service

[Service]
Type=simple
User=nobody
Group=nobody
ExecStart=/usr/bin/webui-aria2

[Install]
WantedBy=multi-user.target
HERE
#
mkdir -p $RPM_BUILD_ROOT/etc/firewalld/services
cat > $RPM_BUILD_ROOT/etc/firewalld/services/%{name}.xml <<HERE
<?xml version="1.0" encoding="utf-8"?>
<service>
 <short>WebUI-Aria2</short>
 <description>WebUI for Aria2</description>
 <port protocol="tcp" port="8000"/>
</service>
HERE
#
%files
%defattr(-,nobody,nobody)
#
%dir %attr(755,root,root) /usr/share/%{name}
#
%attr(-,nobody,nobody) /usr/share/%{name}/css
%attr(-,nobody,nobody) /usr/share/%{name}/flags
%attr(-,nobody,nobody) /usr/share/%{name}/fonts
%attr(-,nobody,nobody) /usr/share/%{name}/img
%attr(-,nobody,nobody) /usr/share/%{name}/js
%attr(-,nobody,nobody) /usr/share/%{name}/LICENSE
%attr(-,nobody,nobody) /usr/share/%{name}/configuration.js
%attr(-,nobody,nobody) /usr/share/%{name}/favicon.ico
%attr(-,nobody,nobody) /usr/share/%{name}/index.html
#
%attr(644,root,root) /usr/lib/systemd/system/%{name}.service
%attr(644,root,root) /etc/firewalld/services/%{name}.xml
%attr(755,root,root) /usr/bin/%{name}
#
%changelog
* Sun Feb 08 2016 Aleksandr Chernyshev <wmlex@yandex.ru> - pull request #183
- Initial release.
