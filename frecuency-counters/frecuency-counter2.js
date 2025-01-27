/* EXERCISE DESCRIPTION
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2) {
  const string1 = num1.toString();
  const string2 = num2.toString();

  if (string1.length !== string2.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  let char1;
  let char2;

  for (let i = 0; i < string1.length; i++) {
    char1 = string1[i];
    char2 = string2[i];

    if (!freqCounter1[char1]) {
      freqCounter1[char1] = 1;
    } else {
      freqCounter1[char1]++;
    }

    if (!freqCounter2[char2]) {
      freqCounter2[char2] = 1;
    } else {
      freqCounter2[char2]++;
    }
  }

  // Compare both frecuency counters.
  for (let prop in freqCounter1) {
    if (freqCounter1[prop] !== freqCounter2[prop]) return false;
  }

  return true;
}

// Different solution using one frequency counter:
// function sameFrequency(num1, num2) {
//     const string1 = num1.toString();
//     const string2 = num2.toString();

//     if (string1.length !== string2.length) return false;

//     const freqCounter = {};

//     // Incrementa el contador para string1 y decrementa para string2
//     for (let i = 0; i < string1.length; i++) {
//         freqCounter[string1[i]] = (freqCounter[string1[i]] || 0) + 1;
//         freqCounter[string2[i]] = (freqCounter[string2[i]] || 0) - 1;
//     }

//     // Si todos los valores son 0, los números tienen la misma frecuencia
//     return Object.values(freqCounter).every(count => count === 0);
// }
