let rows = document.getElementById("rows");
let colomuns = document.getElementById("colomuns");
let btn = document.getElementById("btn");
btn.addEventListener("click" ,add)
function add(){
    let body = document.body;
let table = document.createElement("table");
body.appendChild(table);
for(var i = 0 ; i <+rows.value ; i++){
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for(var x = 0 ; x <+colomuns.value ; x++){
    var td = document.createElement("td");
tr.appendChild(td);
var txt =  document.createTextNode("my text")
td.appendChild(txt)
   
}
}
}