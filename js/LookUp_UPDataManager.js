// JavaScript File

class LookUp_UPDataManager{
    
    constructor(myTxtFile){
        this.constructor_executed = false;
        this.txtFile = myTxtFile;
        this.data = "";
        this.json_data = null;
        this.constructor_executed = true;
    }
    
    getData(){
        //var aux ="";
        $.ajax({
            url: this.txtFile,
            /*
            beforeSend: function( xhr ) {
                xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
            },
            */
            success: function(data){
                $("#LookUp_UpsData").val(data);
                appStatus.dataLoaded = true;
                //$(document).trigger(EVENT_DATA_LOADED);
            }
            
        });
    }
    
    transformData(){
        var auxData = this.data;
        var lines = auxData.split("\n");
        
        var json = "[";
        if (lines.length > 0){
            var i=0;
            lines.shift();
            lines.shift();
            lines.shift();
            
            var line =null;
            var json_line;
            for ( var index =  0; index < lines.length; index++ ){
                line = lines[index];
                //Si la linea está vacia, continuamos el loop
                if (line == ""){
                    continue;
                }
                json_line = "{";
                json_line += this.generaLinea(line);
                json_line += "}";
                if (index > 0)
                {
                    json+= ",";
                }
                json  = json + json_line;
            }
        }
        json += "]";
        this.json_data = JSON.parse(json);
        
        //Relleno la tabla.
        
        //myTable_body
/*        
        var template = $( "<li>", { id: "1234", html:
  $( "<div>", { class: "bar", text: "bla" } )
});
$('body').append(template);
*/
        var template_str = "";
        for ( var index_up = 0;  index_up < this.json_data.length; index_up++ ){
            var up = this.json_data[index_up];
                template_str +="<tr>";
                    template_str += "<td>";
                    template_str += up.codi_EP;
                    template_str += "</td>";
                    template_str += "<td>";
                    template_str += up.descripcio_EP;
                    template_str += "</td>";
                    template_str += "<td>";
                    template_str += up.codi_UP;
                    template_str += "</td>";
                    template_str += "<td>";
                    template_str += up.descripcio_UP;
                    template_str += "</td>";
                    template_str += "<td>";
                    template_str += up.codi_tipus_UP;
                    template_str += "</td>";
                    template_str += "<td>";
                    template_str += up.descripcio_tipus_UP;
                    template_str += "</td>";
                    
                    template_str += "<td>";
                    template_str += up.codi_subtipus_UP;
                    template_str += "</td>";
                    
                    template_str += "<td>";
                    template_str += up.descripcio_subtipus_UP;
                    template_str += "</td>";

            template_str += "</tr>";
        }
        
        $('#myTable_body').append(template_str);
        
        //$(document).ready(function(){
            $('#myTable').DataTable(
                {
                    "language": { "url": "//cdn.datatables.net/plug-ins/1.10.13/i18n/Catalan.json" }
                }
            );
        //});
        
        
        
    }
    
    generaLinea(linea){
        var tags;
        var tag;
        var tag_json = null;
        
        tags = linea.split(";");
        var i =0;
        tag_json  = "";
        for( i = 0; i < tags.length; i++){
            
            var nombreCampo = this.determinaCampo(i);
            if ( i != 0 ){
                tag_json += ",";
            }
            
            tag_json += "\""+nombreCampo+"\"";
            tag_json += ":";
            tag_json += "\""+tags[i].replace(/\"/g,"_")+"\"";
            
        }
        
        return tag_json;
    }
    
    determinaCampo(i){
        
        var retorno = "err";
        //codi EP; descripció EP;;codi UP; descripció UP;;codi tipus UP; descripció tipus UP;;codi subtipus UP; descripció subtipus UP;
        switch(i) {
            case 0:
                retorno = "codi_EP";
            break;
            case 1:
                retorno = "descripcio_EP";
            break;
            case 2:
                retorno = "codi_UP";
            break;
            case 3:
                retorno = "descripcio_UP";
            break;
            case 4:
                retorno = "codi_tipus_UP";
            break;
            case 5:
                retorno = "descripcio_tipus_UP";
            break;
            case 6:
                retorno = "codi_subtipus_UP";
            break;
            case 7:
                retorno = "descripcio_subtipus_UP";
            break;
            default:
                retorno = "";
            break;
        }
        
        return retorno;
    }
    
    set datos(misDatos){
        this.data = misDatos;
        if (this.constructor_executed == true){
            this.transformData();
        }
        
    }
}