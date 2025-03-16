// Code for generating a random number between 1 and 10
const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// Code for checking if a number is prime
const isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Code for generating a random prime number between 1 and 10
const getRandomPrimeNumber = () => {
  let num = getRandomNumber();
  while (!isPrime(num)) {
    num = getRandomNumber();
  }
  return num;
};
