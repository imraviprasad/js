function function1() {

    let hour = new Date().getHours();
    document.getElementById("input").value = hour;

    if (hour >= 0 && hour <= 12) {
        document.getElementById("output").innerHTML = "good morning";

    } else if (hour >= 12 && hour <= 18) {
        document.getElementById("output").innerHTML = "good evening";

    } else {
        document.getElementById("output").innerHTML = "good night";
    }


}