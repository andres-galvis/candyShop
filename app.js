/* const bodyParser = require("body-parser") */
/* const { default: mongoose } = require("mongoose"); */
let express=require("express");
let { contentType } = require("express/lib/response");
let bodyParser = require("body-parser");
let app = express();
methodOverride=require("method-override");
mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use((req, res, next) =>{

    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Request-with, Content-Type, Acept, Access-Control-Allow-Request-Method');

    res.header ('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    res.header('Allow', 'GET POST, OPTIONS, PUT , DELETE');

    next();

})

app.use(require('./routers/router'))

module.exports=app;
