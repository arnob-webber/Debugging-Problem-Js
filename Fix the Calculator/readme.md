# fix the Calculator

### description

<p>u r given a simple calculator function that is supposed to add, subtract, multiply, or divide two  numbers. however, the function contains several bugs. <i> Your task is to identify and fix the bugs so that the calculator works correctly. </i>
</p>

> Fix the function calculate so that it correctly performs the given operation.

```javascript
function calculate(a, b, operator) {
  switch (operator) {
    case "add":
      return a - b;
    case "subtract":
      return a + b;
    case "multiply":
      return a / b;
    case "divide":
      return a * b;
    default:
      return "Invalid operator";
  }
}

console.log(calculate(5, 3, "add"));
console.log(calculate(5, 3, "subtract"));
console.log(calculate(5, 3, "multiply"));
console.log(calculate(5, 3, "divide"));
```

