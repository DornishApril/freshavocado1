const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const productData = JSON.parse(data);
console.log(productData);


//SERVER

//created server
//http creates two variables, request->req and respond->res
//request holds request, like url n stuffs
//res has lots of functions
//IM SO FUCKING EXCITEDDDDDDDDDDDDDDDDDDD

const server = http.createServer((req, res) => {
  //console.log(req);
  console.log(req.url);

  const pathName = req.url;

  if (pathName==="/"||pathName === "/overview") {
    res.end("This is an Overview!!");
    }
  else if (pathName === "/product")
  {
      res.end("This is a product!");
  }
  else if (pathName === "/api")
  { 
      //instead of doing ./----, using __dirname wud do good
      //require doesnt follow it
      
      res.writeHead(200, {
        'Conent-type': 'application/json',
        'my-own-header':"Hello World"
        //an http header is a piece of info to inform the browser about the resource

    });

      res.end(data);
      
          
      }
  else
  {
      res.writeHead(404, {
          'Conent-type': 'text/html',
          'my-own-header':"Hello World"
          //an http header is a piece of info to inform the browser about the resource

      });
      res.end('<h1>Page Not Found</h1>');
    }

  console.log(`Request Recieved!`);
  //res is RESPONDING, res is ressssinggggg after req done
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
