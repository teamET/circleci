var express=require('express');
var app=express();

app.get('/',(req,res)=>{
	res.status(200).send('hello world');
});

module.exports.app=app;

if (!module.parent){
	var server=app.listen(3000,()=>{
		console.log('app started',server.address());
	});
}

