# As of 2018-06-29 https://github.com/aria2/aria2/blob/master/Dockerfile.raspberrypi, aria2 is build upon ubuntu trusty (which is debian 8). So pick a debian 8 as well
FROM arm32v7/debian:8.11 AS aria2-builder

# aria2 build
RUN mkdir -p /builds && mkdir -p /builds/aria2c \
    && apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y curl git \
    make g++ libssl-dev nettle-dev libgmp-dev libssh2-1-dev libc-ares-dev libxml2-dev zlib1g-dev libsqlite3-dev pkg-config libxml2-dev libcppunit-dev autoconf automake autotools-dev autopoint libtool openssl \
    && ARIA2_VERSION="1.34.0" \
    && mkdir aria_build && cd aria_build \
    && curl -L https://github.com/aria2/aria2/releases/download/release-"$ARIA2_VERSION"/aria2-"$ARIA2_VERSION".tar.gz > aria2.tar.gz \
    && tar -xzf aria2.tar.gz \
    && cd aria2-$ARIA2_VERSION \
    && autoreconf -i \
    && ./configure --with-ca-bundle='/etc/ssl/certs/ca-certificates.crt' \
    && make \
    && mv src/aria2c /builds/aria2c \
    && cd ../.. \
    && rm -rf aria_build \
    && rm -rf /var/lib/apt/lists/*



FROM arm32v7/golang:1.10.0-stretch AS go-builder

# goreman build
RUN mkdir -p /builds && mkdir -p /builds/goreman \
    && export GOPATH=`pwd` \
    && go get github.com/mattn/goreman \
    && go build -o /builds/goreman/goreman github.com/mattn/goreman

RUN mkdir -p /builds && mkdir -p /builds/gosu \
    && apt-get update && apt-get install -y curl \
    && GITHUB_REPO="https://github.com/tianon/gosu" \
    && LATEST=`curl -s  $GITHUB_REPO"/releases/latest" | grep -Eo "[0-9].[0-9]*"` \
    && curl -L $GITHUB_REPO"/releases/download/"$LATEST"/gosu-armhf" > /builds/gosu/gosu \
    && chmod +x /builds/gosu/gosu \
    && unset GITHUB_REPO && unset LATEST \
    && rm -rf /var/lib/apt/lists/*



FROM arm32v7/httpd:2.4.33
# BE CAREFULL the arm32v7/httpd image MUST match the version of debian used to build aria2. otherwise shared library versions might not be the same.
# A better approach will be to build static version of aria2.

# download aria2 dependendies
RUN apt-get update && apt-get install -y --no-install-recommends \
      busybox \
      ca-certificates \
      libc-ares2 \
      libssh2-1 \
      libxml2 \
      openssl \
      libsqlite3-0 \
      zlib1g \
    && rm -rf /var/lib/apt/lists/*

# Grab aria2c, goreman and gosu binaries
COPY --from=aria2-builder /builds/aria2c/aria2c /usr/bin/
COPY --from=go-builder /builds/goreman/goreman /usr/local/bin/
COPY --from=go-builder /builds/gosu/gosu /usr/local/bin/

ADD ./docs /webui-aria2

RUN groupadd -r aria \
    && useradd -m -r -g aria aria -u 1000 \
    && echo "web: gosu aria /bin/busybox httpd -f -p 8080 -h /webui-aria2\nbackend: gosu aria bash -c 'shopt -s dotglob nullglob && /usr/bin/aria2c --dir=/data/downloads/ --conf-path=/home/aria/.aria2/aria2.conf /data/downloads/*.torrent'" > Procfile

# aria2 downloads directory
VOLUME /data/downloads

# aria2 conf directory
VOLUME /home/aria/.aria2

# webui static content web server and aria2 RPC port
EXPOSE 8080 6800

CMD ["start"]
ENTRYPOINT ["/usr/local/bin/goreman"]
