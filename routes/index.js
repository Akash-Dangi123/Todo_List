var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

const userschema = require("./users");

router.post('/content', function(req, res) {
  
  // console.log(req.body.mydata);
  userschema.create({
    note: req.body.mydata,
  })
  .then(function(data){
    // console.log(data);
    res.render("printmydata",{myobj: data})
  })
});

router.get('/allnotes', function(req, res) {
  userschema.find()
  .then(function(notes){
    // console.log(notes);
    res.render("allnotes",{myobj: notes})
  })
});

router.get("/viewmore/:id",function(req,res){
  // console.log(req)
  userschema.findOne({_id: req.params.id})
  .then(function(founddata){
    console.log(founddata)
    res.render("viewMore",{myobj2: founddata});
})
})

router.get('/delete/:id', function(req, res,next) {
  userschema.findOneAndDelete({
    _id: req.params.id
  })
  .then(function (deletenote){
    res.redirect("/allnotes");
  })
});



module.exports = router;
