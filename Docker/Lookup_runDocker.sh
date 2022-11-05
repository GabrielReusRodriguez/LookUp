#!/usr/bin/bash

#docker run --name Mylookup --read-only --volume  ../web/:/usr/share/nginx/html/ -d -p 8080:80  nginx
docker run --rm -d --name Mylookup -p 8080:80  gabriel/lookup:1.0