function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) { 
    sum + numbers[i]; 
  }
  return sum / numbers.length; 
}

console.log(calculateAverage([2, 4, 6, 8, 10])); // Expected: 6
