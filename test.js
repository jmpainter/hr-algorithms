'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  // look at first sock
  let pairs = 0;
  for (let i = 0; i < ar.length - 1; i++) {
    const sock1 = ar[i];
    const sock2Index = ar.find(sock => sock === sock1);
    if (sock2Index) {
      ar.splice(i, 1);
      ar.splice(sock2Index, 1);
      console.log(ar);
      pairs++;
    }
  }
  return pairs;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const ar = readLine()
    .split(' ')
    .map(arTemp => parseInt(arTemp, 10));

  let result = sockMerchant(n, ar);

  ws.write(result + '\n');

  ws.end();
}

main();
