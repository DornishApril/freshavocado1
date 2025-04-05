const http = require("http");
const url = require("url");


//SERVER

//created server
//http creates two variables, request->req and respond->res
//request holds request, like url n stuffs
//res has lots of functions
//IM SO FUCKING EXCITEDDDDDDDDDDDDDDDDDDD



const server = http.createServer((req, res) =>
{   
    //console.log(req);
    
    console.log(`Request Recieved!`);
    //res is RESPONDING, res is ressssinggggg after req done
    res.end('Hellooooo FUCKERSSSS IM HEREEE NOWWWW!!! 💀');

});

server.listen(8000,'127.0.0.1', () =>
{
    console.log('Listening to requests on port 8000');
});

