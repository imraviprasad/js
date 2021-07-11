function goodday() {
    var time = new Date().getHours();
    if (time < 24) {
        document.getElementById("demo").innerHTML = "Good day";
    }
}