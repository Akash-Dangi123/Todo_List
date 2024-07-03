const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myschool");
 var userschema = mongoose.Schema({
  note: String,
 })

 module.exports = mongoose.model("user",userschema);