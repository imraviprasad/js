let userArray = [];

function pushArray() {
    let inputvalue = document.getElementById("input").value;
    userArray.push(inputvalue);
    document.getElementById("output").innerHTML = userArray;
}

function lastarray() {
    let a = userArray[userArray.length - 1];
    document.getElementById("lastelement").value = a;
}