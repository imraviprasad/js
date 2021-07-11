function test() {

    let number = document.getElementById("input1").value;
    let percentage = document.getElementById("input2").value;
    let answer = (number / 100) * percentage;
    document.getElementById("output").innerHTML = answer;


}