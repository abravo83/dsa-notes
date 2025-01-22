```javascript
// Create a function that given two strings compares if both are valid anagrams

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < string1.length; i++) {
    let char1 = string1[i];
    let char2 = string2[i];

    if (!counter1[char1]) {
      counter1[char1] = 1;
    } else {
      counter1[char1]++;
    }

    if (!counter2[char2]) {
      counter2[char2] = 1;
    } else {
      counter2[char2]++;
    }
  }

  for (let prop in counter1) {
    if (counter1[prop] !== counter2[prop]) return false;
  }

  return true;
}
```
