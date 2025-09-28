const utils = require('./utils');

function greet() {
  console.log('Hello World');
  console.log('Welcome!');
  console.log('2 + 3 =', utils.add(2, 3));
}

greet();