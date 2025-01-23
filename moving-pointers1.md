```javascript
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(sortedArray) {
  if (sortedArray.length < 2) return sortedArray.length;

  let j = 0;
  let k = 1;

  while (k < sortedArray.length) {
    if (sortedArray[j] !== sortedArray[k]) {
      j++;
      sortedArray[j] = sortedArray[k];
    }

    k++;
  }

  return j + 1;
}
```
