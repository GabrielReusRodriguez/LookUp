#!/usr/bin/env bash

HOME=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
DOCKER_DIR=${HOME}

curr_uid=`id -u`
curr_gid=`id -g`

echo $DOCKER_DIR
#docker build  --build-arg UID=${curr_uid} --build-arg GID=${curr_gid} -t golang_sdk .
#docker build  -f ${DOCKER_DIR}/Dockerfile  --build-arg GID=${curr_gid} --build-arg UID=${curr_uid} --build-arg UserName=lookup   -t gabriel/lookup:1.0 .
docker build  -f ${DOCKER_DIR}/Dockerfile -t gabriel/lookup:1.0 .