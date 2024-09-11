const express = require('express');
const app = express();

// Middleware function
app.use(function(req, res, next) {
    console.log("Middleware");
    next(); // Pass control to the next handler
});

// Route handler
app.get('/', function(req, res) {
    res.send("Hello");
});

app.get('/profile',function(req,res,next){
   return next(new Error("something caused error here"));
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("something is causing error to occur here")
})

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
