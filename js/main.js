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
