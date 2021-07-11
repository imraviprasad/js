function swapping() {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    //parseInt(num1);
    //parseInt(num2);
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 + num2;
    document.getElementById("outputnum1").value = num1;
    document.getElementById("outputnum2").value = num2;

}