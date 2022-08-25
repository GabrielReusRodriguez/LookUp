// JavaScript File

//Variables globales.

/*global $*/
/*global EVENT_DATA_LOADED*/
/*global upDataManager*/

configFile = determinaConfig();

//Creo los eventos.
$( document ).on( EVENT_DATA_LOADED , function( event, myName ) {
   // upDataManager.datos = $("#LookUp_UpsData").val();
   upDataManager.transformData();
    
});

$( document ).on( EVENT_SHOW_DIV_LOADING , function( event, myName ) {
    muestraDivLoading();
   
    
});

$( document ).on( EVENT_SHOW_DIV_TABLE , function( event, myName ) {
    muestraDivTablas();
});

$( document ).on ( EVENT_APP_LOADED , function ( event, myName){
    upDataManager.getData();
});


//Obtengo la configuración de la aplicación.

    $.getJSON( configFile, function( data ) {
                config = data;
                appStatus = new LookUp_AppStatus();
                upDataManager= new LookUp_UPDataManager(config["cataleg_file"]);
                $( document ).trigger(EVENT_APP_LOADED);
        }).fail(function(xhr, textStatus, error) {
                    alert("Error al recibir la configuración: "+textStatus);
                });
