#!/usr/bin/env bash

HOME=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

echo "Inici"

${HOME}/fileGetter.sh UP
${HOME}/parseTxt.awk ${HOME}/../data/txt/cataleg_up.txt > ${HOME}/../data/json/cataleg_up.json
#./server/txt2Json.py -i cataleg_up

DOCKER_ID=`docker inspect -f '{{.Id}}' Mylookup`

#docker run -i gabriel/lookup:1.0 cp ${HOME}/../data/json/cataleg_up.json /usr/share/nginx/html/Lookup/data/cataleg_up.json
docker cp ${HOME}/../data/json/cataleg_up.json   ${DOCKER_ID}:/usr/share/nginx/html/Lookup/data/cataleg_up.json
echo "Final"