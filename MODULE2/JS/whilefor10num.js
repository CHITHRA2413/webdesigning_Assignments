let i = 1;
let product = 1;

while (i <= 10) {
  let factorial = 1;
  let j = 1;
  
  while (j <= i) {
    factorial *= j;
    j++;
  }
  
  product *= factorial;
  i++;
}

console.log("Product:", product);