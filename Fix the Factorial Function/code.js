function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 2); 
  }
}

console.log(factorial(5));  //120
console.log(factorial(0)); // 1
