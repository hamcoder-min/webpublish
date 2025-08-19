/**
 * 논리연산자 : &&(and), ||(or)
 * 
 * 논리식1 && 논리식2 = 결과값
 * true   &&  true  = true
 * true   &&  false = false
 * false  &&  true  = false (shortcut)
 * false  &&  false = false (shortcut)
 * ----------------------------------------
 * 논리식1 || 논리식2 = 결과값
 * true   ||  true  = true (shortcut)
 * true   ||  false = true (shortcut)
 * false  ||  true  = true
 * false  ||  false = false
 */

let a = 1;
let b = 2;

console.log('AND ------------------');
console.log((a < b) && (a < b));
console.log((a < b) && (a > b));
console.log((a === b) && (a < b));
console.log((a === b) && (a > b));

console.log('OR ------------------');
console.log((a < b) || (a < b));
console.log((a < b) || (a > b));
console.log((a === b) || (a < b));
console.log((a === b) || (a > b));
