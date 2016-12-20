#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys, getopt
import json

def procesaLinea(line):
    json_line = None
    json_line = {}
    
    #json_line = {"1":"Sachine Tendulkar", "2":"Dravid", "3":"Sehwag", "4":"Laxman","5":"Kohli"}
    tags = line.split(";")
    
    json_line["codi_EP"] = tags[0].replace("\"","'")
    json_line["descripcio_EP"] = tags[1].replace("\"","'")
    json_line["codi_UP"] = tags[2].replace("\"","'")
    json_line["descripcio_UP"] = tags[3].replace("\"","'")
    json_line["codi_tipus_UP"] = tags[4].replace("\"","'")
    json_line["descripcio_tipus_UP"] = tags[5].replace("\"","'")
    json_line["codi_subtipus_UP"] = tags[6].replace("\"","'")
    json_line["descripcio_subtipus_UP"] = tags[7].replace("\"","'")
    
    return json_line

folder = "../data/"
filename = ""
json_structure = []

#Gestión de parámetros.

print "Tamano de argumentos: _"+str(len(sys.argv))+"_"

try:
    opts, args = getopt.getopt(sys.argv[1:],"hi:",["help","ifile="])
except getopt.GetoptError:
    print 'txt2Json.py -i <inputfile>'
    sys.exit(2)

for opt, arg in opts:
    if opt == '-h':
        print 'txt2Json.py -i <inputfile>'
        sys.exit(2)
    elif opt in ("-i", "--ifile"):
        filename = arg

"Abro el fichero txt"
i = 0

with open(folder+"txt/"+filename+".txt", "r") as file:
    array = []
    for line in file:
        if i > 2:
            json_line = procesaLinea(line)
            json_structure.append(json_line)        
        i = i+1
file.close()


#Genero el string json.
json_string =  json.dumps(json_structure)


#Escribo el string generado a un fichero.
file = open(folder+"json/"+filename+".json", "w")
file.write(json_string)
file.close()


print json_string
sys.exit(0)

    