const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');


const data = fs.readFileSync(`${__dirname}/dev-data/data2.json`, 'utf-8');

const dataObj = JSON.parse(data);



//SERVER

//created server
//http creates two variables, request->req and respond->res
//request holds request, like url n stuffs
//res has lots of functions
//IM SO FUCKING EXCITEDDDDDDDDDDDDDDDDDDD


const replaceTemplate = (temp, product) =>
{
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output=output.replace(/{%IMAGE%}/g, product.image);
    output=output.replace(/{%PRICE%}/g, product.price);
    output=output.replace(/{%FROM%}/g, product.from);
    output=output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%ID%}/g, product.id);
    output=output.replace(/{%DESCRIPTION%}/g, product.description);

    if(!product.organic)
    output=output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');

    return output;



}

const server = http.createServer((req, res) => {
  //console.log(req);
  console.log(req.url);

  const pathName = req.url;

    if (pathName === "/" || pathName === "/overview")
    {
        //Overview
        

        res.writeHead(200, {
            'Conent-type': 'text/html',
            'my-own-header':"Hello World"
            //an http header is a piece of info to inform the browser about the resource
    
        });

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        console.log(output);

        res.end(output);
        

    }
  else if (pathName === "/product")
    {
      //Product
      res.end("This is a product!");






    }
    else if (pathName.includes('/product?id='))
    {

      const url = pathName;

      // Create a new URLSearchParams object from the query string part of the URL
      const params = new URLSearchParams(url.split('?')[1]);

      // Get the 'id' value
      const i_d = Number(params.get('id'));
        

      console.log(dataObj);  // Output: 12
      
      const prod = dataObj.find(obj => obj.id === i_d);
      
      //
      const output = replaceTemplate(tempProduct, prod);
      


      console.log(prod);

      //res.end(`Product ID route made! ID :${i_d}`);
      res.end(output);
      
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
