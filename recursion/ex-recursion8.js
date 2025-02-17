/*
someRecursive
Write a recursive function called someRecursive which accepts an array and a callback.
The function returns true if a single value in the array returns true when passed to the callback. 
Otherwise it returns false.
*/

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = (val) => val % 2 !== 0;
function someRecursive(arr, callback) {
  if (!arr.length) return false;
  let result = false;

  function someRecursiveHelper(helperArr) {
    if (!helperArr.length) return;
    const callBackResult = callback(helperArr[helperArr.length - 1]);
    if (callBackResult) {
      result = true;
      return;
    }
    someRecursiveHelper(helperArr.slice(0, helperArr.length - 1));
  }

  someRecursiveHelper(arr);
  return result;
}

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8, 9], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([4, 6, 8], (val) => val > 10));

/*
A different solution:
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}
*/
