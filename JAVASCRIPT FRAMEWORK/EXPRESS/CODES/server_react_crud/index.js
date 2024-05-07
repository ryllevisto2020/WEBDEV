var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var express = require('express')
var cors = require('cors')

var app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: 'http://localhost:3000',credentials:true}));
app.use(cookieParser());

app.get('/authenticate',function(req,res){
  if(req.headers.cookie){
    console.log('test');
    res.json({status:200,code:"0x102",message:"valid Cookie"});
  }else{
    console.log('why');
    res.json({status:404,code:"0x101",message:"invalid Cookie"});
  }
});

app.get('/test',function(req,res){
  res.cookie('test','test');
  res.json("Login Success!")
})

app.post('/logout',function(req,res){
  console.log(req);
  res.clearCookie("test")
  res.send("logout")
})

app.get('/data',function(req,res){
  const data = [{name:"visto"},{name:"dulay"}]
  res.json(data);
})
/* SERVER LISTEN */
app.listen(2030,function(){
    console.log('listening on port '+2030);
});