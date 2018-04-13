var trans = ["2018-4-1,100,Food", "2018-4-2,303,Shopping", 
            "2018-4-3,222,Entertainment","2018-4-4,300,Groceries",
            "2018-4-5,30,Transport","2018-4-6,56,Food","2018-4-7,88,Shopping",
            "2018-4-8,323,Entertainment","2018-4-9,99,Transport",
            "2018-4-10,78,Food","2018-4-5,78,Shopping","2018-4-5,76,Groceries",
            "2018-4-5,12,Transport","2018-4-5,55,Food","2018-4-5,99,Shopping",
            "2018-4-5,100,Entertainment","2018-4-5,38,Groceries","2018-4-5,44,Entertainment",
            "2018-4-5,91,Transport","2018-4-5,81,Food","2018-4-5,11,Shopping",
            "2018-4-5,50,Entertainment","2018-4-5,81,Groceries","2018-4-5,33,Transport",
            "2018-4-5,77,Food","2018-4-5,68,Entertainment","2018-4-5,11,Transport",
            "2018-4-5,120,Groceries","2018-4-5,30,Food","2018-4-5,88,Food"];


fillInTable();
function fillInTable(){
    var table = document.querySelector("#myTable");
    console.log(table.length);
    for (var i = 0; i < trans.length; i++) {
        var row = table.insertRow(table.length);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        var info = trans[i].split(",");

        cell0.innerHTML = i;
        cell1.innerHTML = info[0];
        cell2.innerHTML = info[1];
        cell3.innerHTML = info[2];
    }
}

google.charts.load("current", {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {

      var groceries = 0;
      var food = 0;
      var transport = 0;
      var shopping = 0;
      var entertainment = 0;
      for (var i = 0; i < trans.length; i++) {
            var info = trans[i].split(",");
            switch(info[2]){
                case "Groceries": groceries += parseInt(info[1]); break;
                case "Food": food += parseInt(info[1]); break;
                case "Transport": transport += parseInt(info[1]); break;
                case "Shopping": shopping += parseInt(info[1]); break;
                case "Entertainment": entertainment += parseInt(info[1]); break;
            }
      }

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Category');
      data.addColumn('number', 'Amount');
      data.addRows([
            ['Groceries', groceries],
            ['Food', food],
            ['Transport', transport],
            ['Shopping', shopping],
            ['Entertainment', entertainment]
            ]);
      
      var options = {'title':'Expenditure in a month',
                       'width':1000,
                       'height':800};

      var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
      chart.draw(data, options);
  }

