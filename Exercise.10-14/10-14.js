let userArray = [];
let vcount;

function pushinput() {

    let input = document.getElementById("input").value;
    userArray.push(input);
    document.getElementById("output").innerHTML = userArray;
    document.getElementById("input").value = "";
}

function findvowel() {
    vcount = 0;
    let vowels = "aeiou";
    let vowelcollection = vowels.split("");
    for (var i = 0; i < userArray.length; i++) {
        checkVowelCount(userArray[i].toLowerCase(), vowelcollection)
    }
    document.getElementById("vowelcount").value = vcount;
}

function checkVowelCount(word, vowelDetails) {

    let wordcollection = word.split("");
    for (let i = 0; i < vowelDetails.length; i++) {
        for (let j = 0; j < wordcollection.length; j++) {
            if (vowelDetails[i] === wordcollection[j]) {
                vcount += 1;
            }
        }
    }
}

function funclength() {
    let a = userArray.length;
    document.getElementById("lengthof").value = a;
}