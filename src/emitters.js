const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');
const aryaSay = say(arya);
const sensaSay = say(sensa);

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('north', () => {
  sensaSay('For the North');
  setImmediate(() => myEmitter.emit('arya'));
});

myEmitter.once('north', () => {
  johnSay('Winter is coming');
});

myEmitter.on('arya', () => {
  aryaSay('The king in the North');
});

let i = setInterval(() => myEmitter.emit('north'), 1000);
setTimeout(() => clearInterval(i), 5000);
