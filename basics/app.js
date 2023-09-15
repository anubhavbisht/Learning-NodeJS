const httpModule = require("http");
const fs = require('fs')
const htmlTemplate = require("./htmlTemplate");
const formTemplate = require("./formTemplate");
const pageNotFound = require("./pageNotFound");


const maxRequest = 2;
let currentRequest = 0;
const server = httpModule.createServer(function (req, res) {
  //event listener
  //   console.log(req, 'Request')
  // console.log(res, 'Response')
  res.setHeader("Content-Type", "text/html");
  // res.setHeader('Max-Requests', maxRequest)
  // res.setHeader('Current-Requests', currentRequest)
  const method = req.method;
  const url = req.url;
  if (url === "/") {
    res.write(htmlTemplate);
  } else if (url === '/form') {
    res.write(formTemplate);
  } else if (url === '/submit' && method === 'POST') {
    const data = []
    req.on('data',(chunk)=>{
        data.push(chunk)
    })
    req.on('end',()=>{
        const finalData = Buffer.concat(data).toString()
        fs.writeFileSync('formContent.txt',finalData)
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
  }
  else {
    res.write(pageNotFound)
  }
  res.end();
  // if(currentRequest>=maxRequest){
  //     process.exit()
  // }
  // currentRequest+=1
  // process.exit()
  // above code hard exits our server when we get one request
});

server.listen(3000);
