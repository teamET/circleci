
var request=require('supertest');
var app=require('../index').app;
/*
   //test without index.js
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
	res.status(200).send('hello world');
});
*/


request(app).get('/').expect(200).end((err,res)=>{
	if(err) throw err;
});

request(app).get('/unknown').expect(200).end((err,res)=>{
	if(err) throw err;
});

/*
describe('GET',()=>{
	it('Should return HTTP responce with statuys code 200',()=>{
		request(app) .get('/') .except(200) .end(function(err,res){ if(err) throw err; });
	});
});
*/
