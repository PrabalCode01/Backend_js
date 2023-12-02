//const http = require('http')
import http from 'http'
import name from './features.js'

console.log(name)

const server = http.createServer((req,res)=>{
 
   //console.log(req.url)

  

   if(req.url === '/about'){
      res.end("<h1>About Page</h1>")
   }
   else if(req.url === '/contact'){
      res.end("<h1>Contact Page</h1>")
   }
   else if(req.url === '/home'){
      res.end("<h1>Home Page</h1>")
   }
   else{
       res.end("<h1>Page not found</h1>")

   }

})

server.listen(4000,()=>{
    console.log("Server is runing on 4000 port")
})