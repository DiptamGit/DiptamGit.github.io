// Call the dataTables jQuery plugin
$(document).ready(function() {
    const datatablesSimple = document.getElementById('datatable');
    
   table = new simpleDatatables.DataTable(datatablesSimple, {
        scrollY:        '50vh',
        scrollCollapse: true,
        paging:         false,
        searchable: false
   });

    // table.columns.adjust().responsive.recalc();
    
    $.ajax({
        type: "GET",
        url: "popular_before_90s_tabledata.csv",
        dataType: "text",
        success: function (response) {
            $('#datatable').find('tbody').empty();
            //console.log(response)
            let output = response.split("\r\n");
            output.forEach(element => {
                //console.log(element)
                let elementArray = element.split(",")

                $('#datatable tbody').append("<tr><td>" + elementArray[0] +
                                            "</td><td>" + elementArray[1] + 
                                            "</td><td>" + elementArray[2] + 
                                            "</td><td>" + elementArray[3] + 
                                            "</td><td>" + elementArray[4] + 
                                            "</td><td>" + elementArray[5] + 
                                            "</td><td>" + elementArray[6] + 
                                            "</td><td>" + elementArray[7] +
                                            "</td><td>" + elementArray[8] +
                                            "</td></tr>");
            });
            //console.log(JSON.stringify(response))
        }
    });

    // const datatablesSimple = document.getElementById('datatable');
    // if (datatablesSimple) {
    //     new simpleDatatables.DataTable(datatablesSimple);
    // }
}); 