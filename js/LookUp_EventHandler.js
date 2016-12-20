
"use strict";

/*global $*/

//Numero los eventos posibles
const EVENT_APP_LOADED = 'APP_LOADED';
const EVENT_DATA_LOADED = 'DATA_LOADED';
const EVENT_SHOW_DIV_LOADING ='SHOW_LOADING';
const EVENT_SHOW_DIV_TABLE ='SHOW_TABLES';

function muestraDivLoading(){
    $("#loading_screen").toggleClass("oculto");
    $("#loading_screen").toggleClass("visible");
    $("#tabla_de_datos").toggleClass("visible");
    $("#tabla_de_datos").toggleClass("oculto");
}

function muestraDivTablas(){
    $("#loading_screen").toggleClass("visible");
    $("#loading_screen").toggleClass("oculto");
    $("#tabla_de_datos").toggleClass("oculto");
    $("#tabla_de_datos").toggleClass("visible");
    
}

