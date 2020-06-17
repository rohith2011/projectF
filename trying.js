var $ = function (id) { return document.getElementById(id); };
var counter;

function start(){

var button = document.getElementById("button");
window.addEventListener("click", count, false);

};
function count(){
    counter = parseInt(document.getElementById("count").textContent);
counter = counter+1;

document.getElementById("count").innerHTML = counter;

};

window.addEventListener("load", start, false);