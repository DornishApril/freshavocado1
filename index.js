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

const fs = require("fs");
const http = require("http");



///////////////////////////////////
//FILESS

//error first system
//first parameter is error, second is data

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("ERRORR ❌➕❌💥");
//   console.log(data1);

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         "./txt/final.txt",
//         `${data2}\n\n\n\t${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your file has been written 😁");
//         }
//       );
//     });
//   });

//   //will run AFTER the file is read;
// });

// console.log("Will read file!");


//SERVER

//created server
//http creates two variables, request->req and respond->res
//request holds request, like url n stuffs
//res has lots of functions
//IM SO FUCKING EXCITEDDDDDDDDDDDDDDDDDDD



const server = http.createServer((req, res) =>
{   
    //console.log(req);
    const clientIp = req.connection.remoteAddress || req.socket.remoteAddress;

    console.log(`Request Recieved! from ${clientIp}`);
    //res is RESPONDING, res is ressssinggggg after req done reqqqqingggg
    res.end('Hellooooo FUCKERSSSS IM HEREEE NOWWWW!!! 💀');
});

server.listen(8000,'127.0.0.1', () =>
{
    console.log('Listening to requests on port 8000');
});

