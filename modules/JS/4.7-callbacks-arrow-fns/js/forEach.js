// ---------------
console.log('#1');

const numbers = [5, 10, 15, 20, 25];

function runClassic() {
  // Klasyczny for
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Indeks ${i}, wartość ${numbers[i]}`);
  }
}

function runForEach() {
  // Iterujący forEach
  numbers.forEach(function (number, index) {
    console.log(`Indeks ${index}, wartość ${number}`);
  });
}
