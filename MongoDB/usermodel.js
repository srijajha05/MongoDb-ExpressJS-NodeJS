const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongodbLecture1`);

const userSchema = mongoose.Schema({
    name:String,
    userName:String,
    email:String
});

module.exports = mongoose.model("user",userSchema);