const express = require('express');
const app = express();

const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/',(req,res)=>{
    res.send("Webpage");
})

app.get('/create',async (req,res)=>{
    let user = await userModel.create({
        username : "Srija",
        email:"srijajha05@gmail.com",
        age:100
    })
    res.send(user);
})

app.get('/post/create',async(req,res)=>{
    let post = await postModel.create({
        postData:"my post data",
        user:"66f0236085a7649f090ac77e"
    })
    let user = await userModel.findOne({_id:"66f0236085a7649f090ac77e"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})

app.listen(3000);