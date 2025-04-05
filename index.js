//fs is a built-in module

const fs = require('fs');

//use ; when declaring variables or objects

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}\n${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);

console.log('File Written');

arr = [1, 2, 3, 4, 5, 6]

arr.map((i,j,k)=>console.log(`${i} ${j} ${k}`))