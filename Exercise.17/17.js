function leapyear() {
    let year = document.getElementById("input").value;

    document.getElementById("output").innerHTML = (year % 100 === 0) ? (year % 400 === 0) :
        (year % 4 === 0);
}