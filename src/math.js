const calculateTip = (total, tipPercent = 0.25) => total + total * tipPercent;

const celsiusToFahrenheit = (temp) => {
  return temp * 1.8 + 32;
};

const fahrenheitToCelsius = (temp) => {
  return (temp - 32) / 1.8;
};

const add = function (a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        reject("Numbers must be non-negative");
      }
      resolve(a + b);
    }, 2000);
  });
};

module.exports = {
  calculateTip,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  add,
};
