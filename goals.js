var trans = ["2018-4-1,100,Food", "2018-4-2,303,Shopping", 
            "2018-4-3,222,Entertainment","2018-4-4,300,Groceries",
            "2018-4-5,30,Transport","2018-4-6,56,Food","2018-4-7,88,Shopping",
            "2018-4-8,323,Entertainment","2018-4-9,99,Transport",
            "2018-4-10,78,Food","2018-4-11,78,Shopping","2018-4-12,76,Groceries",
            "2018-4-5,13,Transport","2018-4-14,55,Food","2018-4-15,99,Shopping",
            "2018-4-16,100,Entertainment","2018-4-17,38,Groceries","2018-4-18,44,Entertainment",
            "2018-4-19,91,Transport","2018-4-20,81,Food","2018-4-21,11,Shopping",
            "2018-4-22,50,Entertainment","2018-4-23,81,Groceries","2018-4-24,33,Transport",
            "2018-4-25,77,Food","2018-4-26,68,Entertainment","2018-4-27,11,Transport",
            "2018-4-28,120,Groceries","2018-4-29,30,Food","2018-4-30,88,Food"];

$(document).ready(function() {
     var t = $('#example').DataTable( {
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
        "order": [[ 1, 'asc' ]]
    } );
 
    t.on( 'order.dt search.dt', function () {
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
    
    for (var i = 0; i < trans.length; i++) {
        var info  = trans[i].split(",");
        t.row.add([ 
            i+1,
            info[0],
            info[1],
            info[2],
        ] ).draw( false );
    }
    // Automatically add a first row of data
    $('#addRow').click();
} );

$(document).ready(function() {
    var table = $('#example').DataTable();
 
    $('#example tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );
} );