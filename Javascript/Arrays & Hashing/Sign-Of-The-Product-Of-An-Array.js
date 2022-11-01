const arraySign = (nums) => {
  let product = 1;

  for (number of nums) {
    if (number == 0) return signFunc(0);

    product *= number;
  }

  return signFunc(product);
};

const signFunc = (x) => {
  return Math.sign(x);
};
