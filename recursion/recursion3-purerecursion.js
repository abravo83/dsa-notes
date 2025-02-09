// Doing the collectOddValues function using pure recursion

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr; //BASE
  if (arr[0] % 2 !== 0) newArr.push(arr[0]); // MODIFICATION
  newArr = newArr.concat(collectOddValues(arr.slice(1))); // PROGRESSION
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
