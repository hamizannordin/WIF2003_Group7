var budgetBtn = document.querySelector("#budgetBtn");
var addBtn = document.querySelector("#addBtn");
var deleteBtn = document.querySelector("#deleteBtn");
var editBtn = document.querySelector("#editBtn");
var budgetDisplay = document.querySelector("#budgetDisplay");
var totalCost = document.querySelector("#totalCost");
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
//var task = [];
var transDisplay = document.querySelector("#list");
var summary = document.querySelector("#summary");
var budget = 1000;
var confirmEditBtn = document.querySelector("#confirmEditBtn");
var confirmDeleteBtn = document.querySelector("#confirmDeleteBtn");

displayList();

function displayList() {
    if (trans.length != 0) {
        transDisplay.innerHTML = ""
        for (var i = 0; i < trans.length; i++) {
            var info = trans[i].split(",");
            var transList = "Transaction " + (i + 1) + "<br>Date: " + info[0] + "  <br>Amount: RM " + info[1] + "<br>Category: " + info[2] + "<br><br>";
            list.innerHTML += transList;
        }
    } else {
        list.innerHTML = "No transaction <br><br>";
    }

    computeTotalCost();
};


budgetBtn.addEventListener("click", function () {
    var newBudget = prompt("Enter new budget: ")
    budgetDisplay.textContent = newBudget;
    totalCost.textContent = newBudget;
});

//addBtn.addEventListener("click",function(){
//    var date = prompt("Date");
//    var amount = prompt("Amount");
//    var cat = prompt("Category");
//    
//    var newTrans = date+","+amount+","+cat;
//    trans.push(newTrans);
//    alert(newTrans);
//    displayList();
//});

addBtn.addEventListener("click", function () {
    trans.push(
        document.getElementById("date").value + "," + document.getElementById("amount").value + "," + document.getElementById("category").value
    );
    
    displayList();
    
    document.getElementById("date").value = ''; document.getElementById("amount").value  = ''; document.getElementById("category").value = '';
});

deleteBtn.addEventListener("click", function () {
    var x = document.getElementById("deleteForm");
    var y = document.getElementById("editForm");
    hide(x,y);
});


editBtn.addEventListener("click", function () {
    var x = document.getElementById("editForm");
    var y = document.getElementById("deleteForm");
    hide(x,y);
});

function hide(x,y){
    y.style.display = "none";
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function computeTotalCost() {
    var total = 0;
    for (var i = 0; i < trans.length; i++) {
        var info = trans[i].split(",")
        total += parseInt(info[1]);
    }

    totalCost.textContent = total;
    if (total > budget) {
        summary.textContent = "Over budget by RM " + (budget - total);
    }
}

confirmEditBtn.addEventListener("click",function(){
    trans[document.getElementById("transNum").value - 1] = 
        document.getElementById("date2").value + "," + document.getElementById("amount2").value + "," + document.getElementById("category2").value;
    
    displayList();
    
    document.getElementById("transNum").value = '';
    document.getElementById("date2").value = ''; document.getElementById("amount2").value  = ''; document.getElementById("category2").value = '';
});

confirmDeleteBtn.addEventListener("click",function(){
    var toDelete = document.getElementById("toDelete").value;
    console.log(toDelete);
    console.log(toDelete == null);
    if(toDelete >= 0 && toDelete <= trans.length && toDelete!=""){
        if(trans.length == 1){
            trans.length = 0;
            console.log(trans);
        } else {
            trans.splice((toDelete-1),1);
            document.getElementById("toDelete").value = '';
        }
        displayList();
    } else {
        alert("Invalid number");
    }
    displayList();
});


