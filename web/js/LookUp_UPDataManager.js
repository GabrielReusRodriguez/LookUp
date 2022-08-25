// JavaScript File

"use strict";

/*global config*/
/*global $*/
/*global upDataManager*/
/*global appStatus*/

class LookUp_UPDataManager{
    
    constructor(myFile){
        this.constructor_executed = false;
        this.file = myFile;
        this.data = "";
        this.json_data = null;
        this.constructor_executed = true;
    }
    
    getData(){
        
        $.ajax({
            url: this.file,
            success: function(data){
                upDataManager.json_data = data;
                appStatus.dataLoaded = true;
            }
            
        });
    }
    
    transformData(){
        //Relleno la tabla.
        
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
        
            var table = $('#myTable').DataTable(
                {
                    "language"      :   { "url": config["table_lang_url"] },
                    "columnDefs"    :   config["columnas_ocultas"],
                    "lengthMenu"    :   config["display_lengths"],
                        ////cdn.datatables.net/plug-ins/1.10.13/api/fnFilterClear.js
                        //https://datatables.net/forums/discussion/30044/how-to-display-length-menu-and-buttons-when-using-editor
                        /*
                        dom: 'Bfrtip',
    buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
    ],*/
    /*
                        buttons:[
                                'copyHtml5'
                            ],*/
                        /*init*/
                        
                        initComplete: function () {
                            this.api().columns().every( function () {
                                var column = this;
                                var select = $('<select><option value=""></option></select>')
                                    .appendTo( $(column.footer()).empty() )
                                    .on( 'change', function () {
                                        var val = $.fn.dataTable.util.escapeRegex(
                                            $(this).val());
 
                                        column
                                        .search( val ? '^'+val+'$' : '', true, false )
                                        .draw();
                                    } );
                    column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
                    //Notificamos que todo ha acabado de montarse
                    $(document).trigger(EVENT_SHOW_DIV_TABLE);
                        }
                        /*Fin*/
                    
                }
            );
        
        
//   /https://datatables.net/extensions/buttons/examples/html5/simple.html
    }

}