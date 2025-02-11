// recursiveRange
/* Write a function called recursiveRange which accepts a number 
and adds up all the numbers from 0 to the number passed to the function */

// recursiveRange(0) //0
// recursiveRange(5) //5+4+3+2+1= 15
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(--num);
}

console.log(recursiveRange(0));
console.log(recursiveRange(5));
console.log(recursiveRange(6));
console.log(recursiveRange(10));
