const fs = require("fs");
const {
  welcomePage,
  userList,
  addUser,
  pageNotFound,
} = require("./htmlTemplates");

function handleRoutingForMyServer (req,res){
  const method = req.method;
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write(welcomePage);
    res.end();
  } else if (url === '/users') {
    res.write(userList);
    res.end();
  } else if (url === '/create-user'){
    res.write(addUser)
    res.end()
  } 
  else if (url === '/add_user' && method === 'POST') {
    const data = []
    req.on('data',(chunk)=>{
        data.push(chunk)
    })
    req.on('end',()=>{
        const finalData = Buffer.concat(data).toString()
        fs.writeFile('dummyUsers.txt',finalData, (err)=>{
            if(err){
                console.error(err)
            }else{
                console.log('data successfully parsed')
                res.setHeader('Location', '/')
                res.statusCode = 302
                res.end();
            }
        })
    })
  }
  else {
    res.write(pageNotFound)
    res.send()
  }
}

module.exports = handleRoutingForMyServer
