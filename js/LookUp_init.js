// JavaScript File

//Variables globales.

//var data ="";



//Creo los eventos.
$( document ).on( EVENT_DATA_LOADED , function( event, myName ) {
    upDataManager.datos = $("#LookUp_UpsData").val();
    
});


//Al acabar de cargar el documento...
$(document).ready(
    function(){
        //Añado el evento de descargado.
        upDataManager.getData();
    }
    );
    
