/* sophisticate_code.js */

// This code calculates the Fibonacci sequence up to a given number.
// It uses a recursive function to generate the sequence,
// and implements memoization to cache the results for faster execution.

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  if (!fibonacci.cache) {
    fibonacci.cache = {};
  }

  if (!fibonacci.cache[n]) {
    fibonacci.cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }

  return fibonacci.cache[n];
}

function printFibonacciSequence(max) {
  console.log("Fibonacci sequence up to " + max + ":");
  for (let i = 0; i <= max; i++) {
    console.log(fibonacci(i));
  }
}

const MAX_NUMBER = 10;

printFibonacciSequence(MAX_NUMBER);

// Some additional complex functionality...

function factorize(n) {
  const factors = [];
  let i = 2;
  while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
      factors.push(i);
      n /= i;
    } else {
      i++;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}

function isPrime(n) {
  return factorize(n).length === 1;
}

function printPrimeFactors(max) {
  console.log("Prime factors of numbers up to " + max + ":");
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      console.log("Prime factors of " + i + ": " + factorize(i).join(", "));
    }
  }
}

printPrimeFactors(MAX_NUMBER);

// This code can be extended with more complex functionality or nested functions
// to make it even more elaborate and sophisticated.