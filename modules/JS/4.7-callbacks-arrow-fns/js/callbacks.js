// // ---------------
// console.log('#1');

// function greet(name = 'Lando') {
//   return `Pozdrawiam ${name}.`;
// }

// Wywołaj funkcję greet i wyświetl jej wynik w konsoli
// console.log(greet('Mango'));// Pozdrawiam Mango.

// Wyświetl funkcję greet w konsoli bez jej wywoływania
// console.log(greet);// ƒ greet() { return `Pozdrawiam ${name}.`; }
// console.log(greet());


// // ---------------
// console.log('#2');

// // Funkcja wywołania zwrotnego
// function greet(name) {
//   console.log(`Pozdrawiam ${name}.`);
// }

// // Funkcja wyższego rzędu
// function registerGuest(name, callback) {
//   console.log(`Rejestracja gościa ${name}.`);
//   callback();
// }

// registerGuest("Mango", greet);


// // ---------------
// console.log('#3');

// function registerGuest(name, callback) {
//   console.log(`Rejestracja gościa ${name}.`);
//   callback(name);
// }

// // Przekaż funkcję inline greet jako wywołanie zwrotne
// registerGuest("Mango", function greet(name) {
//   console.log(`Pozdrawiam ${name}.`);
// });

// // Przekaż funkcję inline notify jako wywołanie zwrotne
// registerGuest("Poly", function notify(name) {
//   console.log(
//     `Szanowny(a) ${name}, Pana/Pani pokój będzie gotowy za 30 minut.`
//   );
// });


// // ---------------
// console.log('#4');

// function processCall(recipient) {
//   // Symuluj dostępność abonenta za pomocą liczby losowej
// const isRecipientAvailable = Math.random() > 0.5;

// if (!isRecipientAvailable) {
//   console.log(`Abonent ${recipient} jest niedostępny, zostaw wiadomość.`);
//       // Logika aktywacji automatycznej sekretarki
// } else {
//   console.log(`Łączenie z ${recipient}, proszę czekać...`);
//       // Logika odbierania połączenia
// }
// }

// processCall("Mango");


// // ---------------
// console.log('#5');

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Symuluj dostępność abonenta za pomocą liczby losowej
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Łączenie z ${name}, proszę czekać...`);
//   // Logika odbierania połączenia
// }

// function activateAnsweringMachine(name) {
//   console.log(`Abonent ${name} jest niedostępny, zostaw wiadomość.`);
//   // Logika aktywacji automatycznej sekretarki
// }

// function leaveHoloMessage(name) {
//   console.log(`Abonent ${name} jest niedostępny, nagraj hologram.`);
//   // Logika nagrywania hologramu
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

// function onError() {
//   console.log('there was an error');
// }

// function onSuccess() {
//   console.log('operation successful')
// }

// function handleData(number, onSuccess, onError) {
//   try {
//     if (number < 5) {
//       throw new Error('too low')
//     }
//     onSuccess();
//   } catch (error) {
//     onError(error);
//   }
// }

// handleData(1, onSuccess, onError);


// ---------------
console.log('#6');

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log(`Logging value: ${value}`);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Przekaż printValue jako funkcję zwrotną
repeat(3, printValue);
// 0
// 1
// 2

// Przekaż prettyPrint jako funkcję zwrotną
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2