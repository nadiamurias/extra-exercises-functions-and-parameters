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

function ten(word, number) {
  return word.repeat(number);
}
console.log(ten("patata", 10));
console.log(ten("Aguacate", 7));
console.log(ten("Pizza", 50));
