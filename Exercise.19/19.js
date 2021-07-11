function maxofthree() {

    let num1 = document.getElementById("firstnumber").value;
    let num2 = document.getElementById("secondnumber").value;
    let num3 = document.getElementById("thirdnumber").value;

    if ((num1 == num2) && (num1 == num3)) {
        document.getElementById("output").innerHTML = "All numbers are equal";

    } else if ((num2 == num1) && (num2 == num3)) {
        document.getElementById("output").innerHTML = "All numbers are equal";

    } else if ((num1 > num2) && (num1 > num3)) {
        document.getElementById("output").innerHTML = num1 + " is larger than " + num2 + " and " + num3;

    } else if ((num2 > num1) && (num2 > num3)) {
        document.getElementById("output").innerHTML = num2 + " is larger than " + num1 + " and " + num3;

    } else if ((num3 > num1) && (num3 > num2)) {
        document.getElementById("output").innerHTML = num3 + " is  larger than " + num2 + " and " + num1;
    }
}