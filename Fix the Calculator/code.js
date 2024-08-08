function calculate(a, b, operator) {
  switch (operator) {
    case 'add':
      return a - b;
    case 'subtract':
      return a + b;
    case 'multiply':
      return a / b;
    case 'divide':
      return a * b;
    default:
      return "no more";
  }
}


console.log(calculate(5, 3, 'add'));     //  8
console.log(calculate(5, 3, 'subtract')); // 2
console.log(calculate(5, 3, 'multiply'));  // 15
console.log(calculate(5, 3, 'divide'));   // 1.666...
