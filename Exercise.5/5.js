function hourstominutes() {
    var minutes, seconds, n;

    n = document.getElementById("input").value;

    minutes = n * 60;
    seconds = n * 3600;

    var hour = "Minutes = " + minutes + ", Seconds = " + seconds;

    document.getElementById("output").innerHTML = hour;
}