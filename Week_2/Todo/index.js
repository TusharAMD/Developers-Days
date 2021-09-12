var express=require("express");
var bodyParser=require("body-parser");
var app=express()
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.wonbr.mongodb.net/todo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/all',(req, res) => {
res.render('all',{"todolist":"1"});
client.connect(err => {
  const collection = client.db("todo").collection("todos");
  var myobj = { todo: "Sample"};
  collection.insertOne(myobj);
}); 
});



app.post('/add',(req, res) => {

res.render('add',{"todolist":"1"});
});

app.listen(3000, () => console.log("Server Up and running"));