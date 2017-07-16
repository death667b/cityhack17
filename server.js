var express = require("express");
var app     = express();
var path    = require("path");


app.use("/img", express.static(__dirname + '/img'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/js", express.static(__dirname + '/js'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/index.html',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/dashboard.html',function(req,res){
  res.sendFile(path.join(__dirname+'/dashboard.html'));
});


app.listen(3000);

console.log("Running at Port 3000");