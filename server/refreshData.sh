#!/usr/bin/bash

echo "Inici"

./fileGetter.sh UP
./parseTxt.awk ../web/data/txt/cataleg_up.txt > ../web/data/json/cataleg_up.json
#./server/txt2Json.py -i cataleg_up

echo "Final"