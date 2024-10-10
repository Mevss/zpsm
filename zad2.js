const _ = require('lodash');

const numbers = [10, 20, 30, 40, 50];
const average = _.mean(numbers);
const max = _.max(numbers);
const min = _.min(numbers);

console.log(`Średnia arytmetyczna: ${average}`);
console.log(`Maksymalna wartość: ${max}`);
console.log(`Minimalna wartość: ${min}`);