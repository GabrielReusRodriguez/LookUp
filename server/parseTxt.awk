#!/usr/bin/awk -f
BEGIN{  FS=";"; print "[ "; }
#/"descripcio_UP": / { printf "'descripcio_UP' : %s, " $1 }
#{ printf "\"descripcio_UP\" : \"%s\", \"codi_subtipus_UP\" : \"%s\", \"codi_EP\" : \"%s\", \"descripcio_tipus_UP\" : \"%s\", \"descripcio_subtipus_UP\" : \"%s\", \"descripcio_EP\" : \"%s\", \"codi_tipus_UP\" : \"%s\", \"codi_UP\" : \"%s\"", $1,$2,$3,$4,$5,$6,$7,$8 }
{ 
    sub(/\r$/, "") 
    gsub(/\"/, "'") #gsubreemplaza TODAS las apariciones, sub solo 1.
    if (NR != 1) #Imprimimos la coma en todos los sitios MENOS  la primera linea.
    printf ",";
    printf "{";
    printf "\"codi_EP\" : \"%s\", \"descripcio_EP\" : \"%s\", \"codi_UP\" : \"%s\", \"descripcio_UP\" : \"%s\", \"codi_tipus_UP\" : \"%s\", \"descripcio_tipus_UP\" : \"%s\", \"codi_subtipus_UP\" : \"%s\",   \"descripcio_subtipus_UP\" : \"%s\"", $1,$2,$7,$8,$3,$4,$5,$6 
    printf "}";
    printf "\n";
}
END{ print " ]" }