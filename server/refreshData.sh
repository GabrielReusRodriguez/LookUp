#!/usr/bin/bash

echo "Inici"

./server/fileGetter.sh UP
./server/txt2Json.py -i cataleg_up

echo "Final"