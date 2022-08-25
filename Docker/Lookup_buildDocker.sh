#!/usr/bin/bash

curr_uid=`id -u`
curr_gid=`id -g`

#docker build  --build-arg UID=${curr_uid} --build-arg GID=${curr_gid} -t golang_sdk .
cd ..
docker build  -f ./Docker/Dockerfile  -t lookup .
cd Docker
