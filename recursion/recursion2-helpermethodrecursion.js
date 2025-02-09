// Helper method recursion.
// Two functions. One inside is the recursive function
// Mainly used when we need to arrange an array, so that we do not lose the data that we are getting on each call to the recursive function. We keep the array outside of the recursive function.

// Pattern:

function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // Modify the outerScopedVariable
    helper(helperInput--); // Progression
  }

  helper(input);
  return outerScopedVariable;
}

// Collect oddValues
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    // BASE
    if (helperInput.length === 0) {
      return;
    }

    // OUTER SCOPE MODIFICATION
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    // PROGRESSION + RECURSION
    helper(helperInput.slice(1));
  }

  helper(arr); // Call to helper
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
