function swapcase() {

    let input = document.getElementById("input").value;
    input.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    })
    document.getElementById("output").innerHTML = input;

}

// return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
//     return chr ? match.toUpperCase() : match.toLowerCase();
// })