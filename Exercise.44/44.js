function testvowel() {

    let input = document.getElementById("input").value;
    let input1 = input.search(/[a,e,i,o,u,A,E,I,O,U]/g)
    document.getElementById("output").innerHTML = input1;
}