var express=require('express');
var app=express();

app.get('/',(req,res)=>{
	res.send('hello world');
});

var server=app.listen(3000,()=>{
	console.log('app started',server.address());

});
