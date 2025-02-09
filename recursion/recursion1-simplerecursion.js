// SumRange
// From a number (4) keep adding each consecutive minor number until 0. 4 + 3 + 2 + 1 + 0
function SumRange(num) {
  // BASE
  if (num === 0) return 0;
  // PROGRESSION
  return num + SumRange(num - 1);
}

// Factorial without recursion
function factorialLoop(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// Factorial with recursion
function factorialRecursion(num) {
  // Base case
  if (num == 1) return 1;
  // Progression
  return num * factorialRecursion(num - 1);
}

console.log(factorialRecursion(4));
console.log(SumRange(4));
