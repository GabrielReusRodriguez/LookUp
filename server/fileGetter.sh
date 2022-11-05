#!/usr/bin/env bash


HOME=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

if [ $# -ne 1 ]; then
    echo "El uso del programa es: fileGetter tipusDada"
    exit 1
fi

tipoFichero=$1
#nombreJson=$2

dataFolder=${HOME}/../data

nombreFicheroTxt="07-Cataleg Unitats proveidores.txt"


#Borro el contenido de la carpeta de descarga rm ..
rm -rf ${dataFolder}/txt/*
rm -rf ${dataFolder}/json/*
rm -rf ${dataFolder}/tmp/*


#const_url=http://catsalut.gencat.cat/web/.content/minisite/catsalut/proveidors_professionals/registres_catalegs/documents/cataleg_up.zip

url=error
nombreFicheroZIP=error

case ${tipoFichero} in
    UP)
    url=https://catsalut.gencat.cat/web/.content/minisite/catsalut/proveidors_professionals/registres_catalegs/catalegs/territorials-unitats-proveidores/cataleg-up.zip
    nombreFicheroZIP="cataleg_up"
    ;;
esac

echo "Descargo el fichero"
wget $url -O ${dataFolder}/tmp/${nombreFicheroZIP}.zip
rc=$?;
if [[ $rc != 0 ]]; then echo "ERROR descargando fichero" exit $rc; fi

#Si todo ha ido bien hago unzip.
unzip ${dataFolder}/tmp/${nombreFicheroZIP}.zip -d ${dataFolder}/txt/
rc=$?;
if [[ $rc != 0 ]]; then echo "ERROR descomprimiendo fichero" exit $rc; fi

#Le asigno los permisos adecuados
chmod 744 "${dataFolder}/txt/${nombreFicheroTxt}"


#Lo transformo a UTF-8
iconv -t utf-8 -f UNICODE "${dataFolder}/txt/${nombreFicheroTxt}" -o "${dataFolder}/txt/${nombreFicheroZIP}.txt" 
#iconv -f UTF-8 -t ISO-8859-15 "${dataFolder}/txt/${nombreFicheroTxt}" -o "${dataFolder}/txt/${nombreFicheroTxt}" 
#iconv -f latin1 -t latin1 "${dataFolder}/txt/${nombreFicheroTxt}" -o "${dataFolder}/txt/${nombreFicheroTxt}" 

#del fichero txt quito las tres primeras lineas ya que no son datos.
for i in {1..3}; 
    do sed -i '1d' "${dataFolder}/txt/${nombreFicheroZIP}.txt";
done

#echo "hola mundo!"