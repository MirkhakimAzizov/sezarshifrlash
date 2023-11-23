"use strict";
let matn = document.querySelector(".matn");
let kalit = document.querySelector(".kalit");
let tugma = document.querySelector(".tugma");
let natija = document.querySelector(".natija");

tugma.addEventListener("click", (e)=>{
    e.preventDefault();
    // console.log(matn.value);
    // console.log(kalit.value);
    natija.textContent = `Shifr matn: ${matn.value}`;
    let natija1 = indexMatn(matn.value);
    console.log(natija1);
    let a = [0,1,2];
    let natija2 = newIndex(natija1, kalit.value);
    console.log(natija2);
    let natija3 = shifrMatn(natija2);
    console.log(natija3);
    natija.textContent = `Shifr matn: ${natija3.join("")}`;
});

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ",", ".","_","'"];

// matndagi harflarni o'rnini aniqladik
function indexMatn(matn){
    let inArr = [];
    for(let i=0; i<matn.length; i++){
        let inElement = alphabet.indexOf(matn[i]);
        inArr.push(inElement);
    }
    return inArr;
}

// matndagi harflar o'rnini kalitdagi qiymatga almashtirdik
function newIndex(arrText, kalit){
    let arr = [...arrText];
    for(let i=0; arr.length; i++){
        if((arr[i] + kalit) < 30){
            arr[i] = (arr[i] + kalit);
        } else {
            arr[i] = ((arr[i] + kalit) - 30);
        }
    }
    return arr;
}

// Shifrlangan matn hosil qilish
function shifrMatn(arr){
    let text = [];
    for(let i=0; i<arr.length; i++){
        text.push(alphabet[i]);
    }
    return text;
}