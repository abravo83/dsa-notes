/*
isPalindrome
Write a recursive function called isPalindrome which returns true 
if the string passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  if (str.lenght < 2) return false;
  let result = true;
  function palindromeHelper(helperString) {
    if (helperString.length < 2) return;
    if (helperString[0] !== helperString[helperString.length - 1]) {
      result = false;
      return;
    }
    return palindromeHelper(helperString.slice(1, helperString.lenght - 1));
  }

  palindromeHelper(str);
  return result;
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
