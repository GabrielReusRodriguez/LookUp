#!/usr/bin/bash

if [ $# -ne 1 ]; then
    echo "El uso del programa es: fileGetter tipusDada"
    exit 1
fi

tipoFichero=$1
#nombreJson=$2

dataFolder=../data


#Borro el contenido de la carpeta de descarga rm ..
rm $dataFolder/txt/*
rm $dataFolder/json/*
rm $dataFolder/tmp/*

#const_url=http://catsalut.gencat.cat/web/.content/minisite/catsalut/proveidors_professionals/registres_catalegs/documents/cataleg_up.zip

url=error
nombreFichero=error

case $tipoFichero in
    UP)
    url=http://catsalut.gencat.cat/web/.content/minisite/catsalut/proveidors_professionals/registres_catalegs/documents/cataleg_up.zip
    nombreFichero=cataleg_up
    ;;
esac

"Descargo el fichero"
wget $url -O $dataFolder/tmp/$nombreFichero.zip
rc=$?;
if [[ $rc != 0 ]]; then echo "ERROR descargando fichero" exit $rc; fi

#Si todo ha ido bien hago unzip.
unzip $dataFolder/tmp/$nombreFichero.zip -d $dataFolder/txt/
rc=$?;
if [[ $rc != 0 ]]; then echo "ERROR descomprimiendo fichero" exit $rc; fi

echo "hola mundo!"