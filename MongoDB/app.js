const express = require('express');
const app = express();


const userModel = require('./usermodel');

app.get('/',(req,res)=>{
    res.send("Hello");
});

app.get('/create',async (req,res)=>{
    let createdUser = await userModel.create({
        name:"Srija",
        email:"srijajha05@gmail.com",
        userName:"srija"
    })
    res.send(createdUser);
})

app.get('/update',async(req,res)=>{
    let updatedUser = await userModel.findOneAndUpdate({userName: "srija"},{name:"Srija Jha"},{new:"true"});
    res.send(updatedUser);
})

app.get('/read',async(req,res)=>{
    let users = await userModel.find({name:"Srija"});
    res.send(users);
})

app.get('/delete',async(req,res)=>{
    let users = await userModel.findOneAndDelete({userName:"srija"});
    res.send(users);
})

app.listen(3000);