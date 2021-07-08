function addnum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = parseInt(num1) + parseInt(num2)
    document.getElementById("output").innerHTML = num3;
}