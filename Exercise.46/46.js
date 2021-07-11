function prime() {
    let n = document.getElementById("input").value;

    if (n === 1) {
        document.getElementById("output").innerHTML = false;
    } else if (n === 2) {
        document.getElementById("output").innerHTML = true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                document.getElementById("output").innerHTML = false;
            }
        }
        document.getElementById("output").innerHTML = true;
    }
}