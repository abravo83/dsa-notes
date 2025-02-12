/*
reverse
Write a recursive function called reverse which accepts a string 
and returns a new string in reverse.
*/

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  let result = [];

  function reverseHelper(helperString) {
    if (helperString.length === 0) return;
    result.push(helperString[helperString.length - 1]);
    return reverseHelper(helperString.slice(0, helperString.length - 1));
  }

  reverseHelper(str);
  return result.join("");
}

console.log(reverse("awesome"));
console.log(reverse("rithmschool"));
