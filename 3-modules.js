const names = require('./4-names');
const sayHi = require('./5-utils');
const externalData = require('./6-alternative-flavour');


console.log(externalData);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);