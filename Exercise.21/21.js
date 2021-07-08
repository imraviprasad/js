function testing() {

    let input = document.getElementById("input").value;

    if (input % 3 == 0 || input % 7 == 0) {
        document.getElementById("output").innerHTML = input + " is a multiple of 3 and 7";
    } else {
        document.getElementById("output").innerHTML = input + " is not a multiple of 3 and 7";
    }
}