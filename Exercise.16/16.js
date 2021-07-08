function alphabeticalorder() {
    let a = document.getElementById("input").value;
    let b = a.split('').sort().join('');
    document.getElementById('output').value = b;
}