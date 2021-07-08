let userArray = [];

function pushArray() {
    let inputValue = document.getElementById("userInput").value;
    userArray.push(inputValue);
    document.getElementById("output").innerHTML = userArray;
    document.getElementById("userInput").value = "";
}

function deleteAll() {
    userArray = [];
    document.getElementById("output").innerHTML = !userArray.length && "You have deleted all";
}

function deleteGuy() {
    let deleteUser = document.getElementById("deleteName").value;
    for (let index = 0; index < userArray.length; index++) {
        if (userArray[index].toLowerCase() === deleteUser.toLowerCase()) {
            userArray.splice(index, 1);
            index--;
        }
    }
    document.getElementById("output").innerHTML = userArray;
}

function deleteIndex() {
    let deleteindex = document.getElementById("deleteIndex").value;
    for (let index = 0; index < userArray.length; index++) {
        if (index === parseInt(deleteindex)) {
            userArray.splice(index, 1);
        }
    }
    document.getElementById("output").innerHTML = userArray;
}

function replaceGuy() {
    let replacename = document.getElementById("replacename").value;
    let actualname = document.getElementById("actualname").value;
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].toLowerCase() === actualname.toLowerCase()) {
            userArray.splice(i, 1, replacename);
        }
    }

    document.getElementById("output").innerHTML = userArray;
}

function replaceWithIndex() {
    let replaceindex = document.getElementById("replaceindex").value;
    let actualindex = document.getElementById("actualindex").value;
    for (let i = 0; i < userArray.length; i++) {
        if (i === parseInt(actualindex)) {
            userArray.splice(i, 1, replaceindex);
        }
    }
    document.getElementById("output").innerHTML = userArray;
}

// function funvowel() {

//     let a = userArray.toString();
//     let vowellist = 'aeiou';
//     let vcount = 0;
//     for (var i = 0; i < a.length; i++) {
//         if (vowellist.indexOf(a[i]) !== -1) {
//             vcount += 1;
//         }
//     }
//     document.getElementById("vowelCount").value = vcount;
// }


let vcount = 0;

function funvowel() {
    vcount = 0;
    let vowels = "aeiou";
    let vowelcollection = vowels.split("");
    for (var i = 0; i < userArray.length; i++) {
        checkVowelCount(userArray[i].toLowerCase(), vowelcollection);
    }
    document.getElementById("vowelCount").value = vcount;
}

function checkVowelCount(word, vowelDetails) {

    let wordCollection = word.split("");
    for (let i = 0; i < vowelDetails.length; i++) {
        for (let j = 0; j < wordCollection.length; j++) {
            if (vowelDetails[i] === wordCollection[j]) {
                vcount += 1;
            }
        }
    }
}