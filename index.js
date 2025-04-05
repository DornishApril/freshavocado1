// //fs is a built-in module

// const fs = require('fs');

// //use ; when declaring variables or objects
// //blocking code
// //code happens one after another
// //SYNCHRONUS
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}\n${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);

// console.log('File Written');

// arr = [1, 2, 3, 4, 5, 6]

// arr.map((i,j,k)=>console.log(`${i} ${j} ${k}`))

const fs = require('fs');

//error first system
//first parameter is error, second is data

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) =>
{
    if(err) return console.log("ERRORR ❌➕❌💥")
    console.log(data1);

    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) =>
    {
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) =>
        {
            console.log(data3);
            fs.writeFile('./txt/final.txt',`${data2}\n\n\n\t${data3}`, 'utf-8', err =>
            {
                console.log('Your file has been written 😁');
            })
        })
    })

    //will run AFTER the file is read;

    
});

console.log('Will read file!');