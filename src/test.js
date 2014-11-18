var bitcoin = require('./index.js');

var pubkeyHash = Buffer('ac5493c4030973e5e04ea27d9af0ec60bccbfca5','hex')
var nameBuf = Buffer('d/yellow');
var random = Buffer('de0be195565f1fd800','hex');
var nameValue = Buffer('BM-NBdQyd3hw3SrAyCMot8rnRvqttRfPjmX')

var script = bitcoin.scripts.nameUpdateOutput(nameBuf,nameValue,pubkeyHash);

var rng = require('secure-random');
var encName = bitcoin.crypto.aesEncrypt('d/yellow',"qwerty");
var decodeName = bitcoin.crypto.aesDecrypt(encName,"qwerty")
console.log(encName);
console.log(decodeName);


