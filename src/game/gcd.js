import { getRandomArbitrary } from '../index.js';

export const taskToGcd = () => 'Find the greatest common divisor of given numbers.';

export const gcdQuestion = () => {
  const number1 = getRandomArbitrary(1, 1000);
  const number2 = getRandomArbitrary(1, 1000);
  return `${number1} ${number2}`;
};

export const nod = (str) => {
  const numbers = str.split(' ');
  const a = Number(numbers[0]);
  const b = Number(numbers[1]);
  const gcd = (n1, n2) => {
    let num1 = n1;
    let num2 = n2;
    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) {
        num1 %= num2;
      } else {
        num2 %= num1;
      }
    }
    return num1 + num2;
  };
  return String(gcd(a, b));
};
