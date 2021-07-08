var a, b;

function findlength() {
    a = document.getElementById("input").value;
    console.log(a);
    b = a.length;
    console.log(b);

    document.getElementById("output").value = b;
}