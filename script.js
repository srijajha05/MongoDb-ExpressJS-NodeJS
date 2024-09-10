const fs = require('fs');
fs.writeFile("hey.txt","I have created a new file",(err)=>{
    if(err) console.error(err);
    else console.log("done");
});
fs.appendFile("hey.txt","I have appended new data",(err)=>{
    if(err) console.error(err);
    else console.log("done");
});
fs.rename("hey.txt","hello.txt",(err)=>{
    if(!err) console.log("done");
});
fs.copyFile("hello.txt","copy.txt",(err)=>{
    if(!err) console.log("done");
});
fs.unlink("copy.txt",(err)=>{
    if(!err) console.log("done");
});
fs.rmdir("./myfolder",(err)=>{
    if(!err) console.log("done");
});

const http = require('http');
const s = http.createServer((req,res)=>{
    res.end("hello");
});
s.listen(3000);