class LookUp_WebSQL{
    
    constructor(data){


         this.db = null;
         var request = null;

        
        //prefixes of implementation that we want to test
         window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
         
         //prefixes of window.IDB objects
         window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
         
         if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB.")
         }
         /*
         const employeeData = [
            { id: "00-01", name: "gopal", age: 35, email: "gopal@tutorialspoint.com" },
            { id: "00-02", name: "prasad", age: 32, email: "prasad@tutorialspoint.com" }
         ];
         */
         
         request = window.indexedDB.open("Ups", 1);
         request.onerror = function(event) {
            //console.log("error: ");
         };
         
         request.onsuccess = function(event) {
            this.db = request.result;
            //console.log("success: "+ db);
         };
         
         request.onupgradeneeded = function(event) {
            this.db = event.target.result;
            var objectStore = this.db.createObjectStore("employee", {keyPath: "id"});
            
            for (var i in data) {
               objectStore.add(data[i]);
            }
         }
        
    }
    
    
    read() {
            var transaction = this.db.transaction(["employee"]);
            var objectStore = transaction.objectStore("employee");
            var request = objectStore.get("00-03");
            
            request.onerror = function(event) {
               alert("Unable to retrieve daa from database!");
            };
            
            request.onsuccess = function(event) {
               // Do something with the request.result!
               if(request.result) {
                  alert("Name: " + request.result.name + ", Age: " + request.result.age + ", Email: " + request.result.email);
               }
               
               else {
                  alert("Kenny couldn't be found in your database!");
               }
            };
         }
         
         readAll() {
            var objectStore = this.db.transaction("employee").objectStore("employee");
            
            objectStore.openCursor().onsuccess = function(event) {
               var cursor = event.target.result;
               
               if (cursor) {
                  alert("Name for id " + cursor.key + " is " + cursor.value.name + ", Age: " + cursor.value.age + ", Email: " + cursor.value.email);
                  cursor.continue();
               }
               
               else {
                  alert("No more entries!");
               }
            };
         }
         
         add() {
            var request = db.transaction(["employee"], "readwrite")
            .objectStore("employee")
            .add({ id: "00-03", name: "Kenny", age: 19, email: "kenny@planet.org" });
            
            request.onsuccess = function(event) {
               alert("Kenny has been added to your database.");
            };
            
            request.onerror = function(event) {
               alert("Unable to add data\r\nKenny is aready exist in your database! ");
            }
         }
         
         remove() {
            var request = this.db.transaction(["employee"], "readwrite")
            .objectStore("employee")
            .delete("00-03");
            
            request.onsuccess = function(event) {
               alert("Kenny's entry has been removed from your database.");
            };
         }
    
}