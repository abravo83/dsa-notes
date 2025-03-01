/*
flatten
Write a recursive function called flatten which accepts an array
 of arrays and returns a new array with all values flattened.
*/

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function flatten(arr1) {
  let result = [];

  function helperFlatten(helperArray) {
    if (!helperArray.length) return;

    let firstItem = helperArray[0];
    if (!Array.isArray(firstItem)) {
      result.push(firstItem);
      helperArray = helperArray.slice(1);
    } else {
      helperArray = [...firstItem, ...helperArray.slice(1)];
    }
    return helperFlatten(helperArray);
  }

  helperFlatten(arr1);
  return result;
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

/*
A different solution:
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}
*/
