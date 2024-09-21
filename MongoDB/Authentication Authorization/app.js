const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser())

app.get('/',(req,res)=>{
    let token = jwt.sign({email:"user@gmail.com"},"secret");
    res.cookie("token",token);
    res.send("done");
    console.log(token);
    /*
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("password", salt, function(err, hash) {
            console.log(hash);
        });
    });
    */
   /*
    bcrypt.compare("password", "$2b$10$UIaJjRPK/HZPwdvbQgMK6O5/O5y2uhfqcOPhVuVbb7XPFqkXpZZDG", function(err, result) {
        console.log(result);
    });
    */
})



app.get('/read',(req,res)=>{
    let data = jwt.verify(req.cookies.token , "secret");
    console.log(data);
    res.send("read page");

})

app.listen(3000);