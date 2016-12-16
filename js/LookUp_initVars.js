//Inicializo las variables globales.
var file ="./data/cataleg_up.txt";
var upDataManager =  null;
var appStatus = null;

        appStatus = new LookUp_AppStatus();
        upDataManager= new LookUp_UPDataManager(file);