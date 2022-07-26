const xorCrypt = require('xor-crypt');
const strEncode = require('str-encode');
const toHex = require('to-hex');

// TODO : NO 1

let encrypted = xorCrypt('Hello World');

console.log(`Soal no 1 : ${encrypted}`);

// TODO : NO 2

let encodedStr = strEncode('Hello World', 'base64');

console.log(`Soal no 2 : ${encodedStr}`);

// TODO : NO 3

let transformHex = toHex('abc');

console.log(`Soal no 3 : ${transformHex}`);
