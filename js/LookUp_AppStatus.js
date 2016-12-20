"use strict";

class LookUp_AppStatus{
  
    constructor(){
        this.constructor_executed = false;
        this.dataLoaded = false;
        this.constructor_executed = true;
    }
    
    get dataLoaded(){
        return this.dataLoaded;
    }
    
    
    set dataLoaded(myDataLoaded){
        //this.dataLoaded = myDataLoaded;
        if (this.constructor_executed == true){
            $(document).trigger(EVENT_DATA_LOADED);
        }
    }
    
}