"use strict";
// ex fase 1
function ten(p) {
  return p.repeat(10);
}
console.log(ten("patata"));

//ex fase 2

function ten(word) {
  return word;
}
console.log(ten("patata"));
console.log(ten("Aguacate"));
console.log(ten("Pizza"));

//ex fase 3

function writeThis(word, number) {
  return word.repeat(number);
}
console.log(writeThis("patata", 10));
console.log(writeThis("Aguacate", 7));
console.log(writeThis("Pizza", 50));

//ex fase 4
const randomNumber = getRandomNumber(10);
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(randomNumber);

function writeThis(word, randomNumber) {
  return word.repeat(randomNumber);
}
console.log(writeThis("patata", randomNumber));
console.log(writeThis("Aguacate", randomNumber));
console.log(writeThis("Pizza", randomNumber));
