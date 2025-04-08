const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');

const slugify = require('slugify');

const replaceTemplate = require('./modules/replaceTemplate');

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data2.json`, 'utf-8');

const dataObj = JSON.parse(data);


//SERVER

//created server
//http creates two variables, request->req and respond->res
//request holds request, like url n stuffs
//res has lots of functions
//IM SO FUCKING EXCITEDDDDDDDDDDDDDDDDDDD

console.log(slugify('Fresh Avocados', { lower: true }));

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

const server = http.createServer((req, res) => {
  //console.log(req);
  console.log(req.url);
  const { query, pathname } = url.parse(req.url, true);

  console.log(query);
  if (pathname === '/' || pathname === '/overview') {
    //Overview

    res.writeHead(200, {
      'Conent-type': 'text/html',
      'my-own-header': 'Hello World',
      //an http header is a piece of info to inform the browser about the resource
    });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    //console.log(output);

    res.end(output);
  } else if (pathname === '/product') {
    // Get the 'id' value
    const i_d = Number(query.id);
    //console.log(i_d);

    //console.log(dataObj);

    const prod = dataObj.find((obj) => obj.id === i_d);

    //
    const output = replaceTemplate(tempProduct, prod);

    //console.log(prod);

    //res.end(`Product ID route made! ID :${i_d}`);
    res.end(output);
  } else if (pathname === '/api') {
    //instead of doing ./----, using __dirname wud do good
    //require doesnt follow it

    res.writeHead(200, {
      'Conent-type': 'application/json',
      'my-own-header': 'Hello World',
      //an http header is a piece of info to inform the browser about the resource
    });

    res.end(data);
  } else {
    res.writeHead(404, {
      'Conent-type': 'text/html',
      'my-own-header': 'Hello World',
      //an http header is a piece of info to inform the browser about the resource
    });
    res.end('<h1>Page Not Found</h1>');
  }

  console.log(`Request Recieved!`);
  //res is RESPONDING, res is ressssinggggg after req done
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
