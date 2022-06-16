const fibonacci = (num) => {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

export const getFibonacciNumbers = (number) => {
  let res = [];

  for (let i = 0; i < number; i++) {
    res.push(fibonacci(i));
  }

  return res;
};
