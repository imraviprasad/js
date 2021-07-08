function reversestring() {
    var str = document.getElementById("input").value;
    var answer = str.split('').reverse().join('');
    document.getElementById("output").value = answer;
}