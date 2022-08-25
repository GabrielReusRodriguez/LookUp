#!/usr/bin/bash

#docker run --name Mylookup --read-only --volume  ../web/:/usr/share/nginx/html/ -d -p 8080:80  nginx
docker run --name Mylookup -d -p 8080:80  lookup