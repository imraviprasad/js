function sortingnumbers() {
    debugger;
    let x = document.getElementById("input1").value;
    let y = document.getElementById("input2").value;
    let z = document.getElementById("input3").value;

    if (x > y && x > z) {
        if (y > z) {
            window.alertx + ", " + y + ", " + z);
    } else {
        window.alert(x + ", " + z + ", " + y);
    }

} else if (y > x && y > z) {
    if (x > z) {
        window.alert(y + ", " + x + ", " + z);
    } else {
        window.alert(y + ", " + z + ", " + x);
    }

} else if (z > x && z > y) {
    if (x > y) {
        window.alert(z + ", " + x + ", " + y);
    } else {
        window.alert(z + ", " + y + ", " + x);
    }
}
}