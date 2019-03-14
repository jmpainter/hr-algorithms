'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the oddNumbers function below.
function oddNumbers(l, r) {
  let solution = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 === 1) {
      solution += i;
      solution += '\n';
    }
  }
  return solution;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const l = parseInt(readLine().trim(), 10);

  const r = parseInt(readLine().trim(), 10);

  const res = oddNumbers(l, r);

  ws.write(res.join('\n') + '\n');

  ws.end();
}

('use strict');

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the oddNumbers function below.
function oddNumbers(l, r) {
  let solution = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 === 1) {
      solution += i;
      solution += '\n';
    }
  }
  return solution;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const l = parseInt(readLine().trim(), 10);

  const r = parseInt(readLine().trim(), 10);

  const res = oddNumbers(l, r);

  ws.write(res.join('\n') + '\n');

  ws.end();
}
