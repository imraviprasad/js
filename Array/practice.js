let userArray = [];

function pushArray() {
    let inputvalue = document.getElementById("input").value;
    userArray.push(inputvalue);
    document.getElementById("output").innerHTML = userArray;
    document.getElementById("input").value = "";
}

function deleteAll() {
    userArray = [];
    document.getElementById("output").innerHTML = "deleted";
}

function deleteGuy() {
    let deleteName = document.getElementById("deleteName").value;
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i] === deleteName) {
            userArray.splice(i, 1);
            i--;
        }
    }
    document.getElementById("output").innerHTML = userArray;
}

function deleteIndex() {
    let deleteIndex = document.getElementById("deleteIndex").value;
    for (var i = 0; i < userArray.length; i++) {
        if (i === parseInt(deleteIndex)) {
            userArray.splice(i, 1);
        }
    }
    document.getElementById("output").innerHTML = userArray;
}

function replaceGuy() {
    let replaceName = document.getElementById("replaceName").value;
    let actualName = document.getElementById("actualName").value;
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i] === actualName) {
            userArray.splice(i, 1, replaceName);
        }
    }
    document.getElementById("output").innerHTML = userArray;
}

function replaceWithIndex() {
    let replaceIndex = document.getElementById("replaceIndex").value;
    let actualIndex = document.getElementById("actualIndex").value;
    for (var i = 0; i < userArray.length; i++) {
        if (i === parseInt(actualIndex)) {
            userArray.splice(i, 1, replaceIndex);
        }
    }
    document.getElementById("output").innerHTML = userArray;
}

function funvowel() {


}