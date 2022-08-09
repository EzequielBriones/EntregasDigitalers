let numeros = [21, 3434, 54667, 32, 54];

let gastoConIva = (number) => {
  let numConIva = (number * 21) / 100;
  return numConIva;
};

let map = (array, callback) => {
  let nums = [];
  for (let i = 0; i < array.length; i++) {
    nums.push(callback(Number(array[i])));
  }
  return nums;
};

console.log(map(numeros, gastoConIva));
