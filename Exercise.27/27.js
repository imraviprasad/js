function studentmark() {
    let mark = document.getElementById("input").value;

    switch (true) {

        case mark >= 90:
            document.getElementById("output").innerHTML = "S Grade";
            break;

        case mark >= 80:
            document.getElementById("output").innerHTML = "A Grade";
            break;

        case mark >= 70:
            document.getElementById("output").innerHTML = "B Grade";
            break;

        case mark >= 60:
            document.getElementById("output").innerHTML = "C Grade";
            break;

        case mark >= 50:
            document.getElementById("output").innerHTML = "D Grade";
            break;

        case mark >= 40:
            document.getElementById("output").innerHTML = "E Grade";
            break;

        case mark < 40:
            document.getElementById("output").innerHTML = "Failed";
            break;

    }
}