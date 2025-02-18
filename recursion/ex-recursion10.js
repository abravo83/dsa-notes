/*
capitalizeFirst
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array.
*/

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
  if (!arr.length) return;
  let newArr = [];
  let item = arr[0];

  item = item[0].toUpperCase() + item.slice(1);
  newArr.push(item);
  if (arr.length === 1) return newArr;
  return newArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
