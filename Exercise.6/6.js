var month, monthlist, d;

function month() {

    d = document.getElementById("input").value;

    monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    let monthindex = parseInt(d.split("-")[1]);

    document.getElementById("output").innerHTML = "The current month is " + monthlist[monthindex - 1];
}