var items = [];


function pushstr() {

    var input = document.getElementById("input").value;

    items.push(input);

    document.getElementById("output").innerHTML = items;
}