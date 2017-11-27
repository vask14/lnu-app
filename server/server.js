let express= require ('express');
let app=new express ();
let port= 8000;

let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let router = require('./app/routes/api.js');
mongoose.connect('mongodb://localhost/product');
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
	next();
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/app/v1',require('./app/routes/api.js'));
app.use(function(req,res){
	res.status(404).send({message:'Page not found'});
});

app.listen (port);
console.log('Server Restful API run in 8000 port');
