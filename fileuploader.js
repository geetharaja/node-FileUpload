var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('winston');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var fileUpload = require('./src/resources/file_upload.js');
var express = require('express');
var app = express();

app.get('/',function(req,res){
        res.sendFile(__dirname + "/views/index.html");
});

app.post('/api/file', fileUpload.uploadFile);

app.listen(3000,function(){
    logger.info("File uploader is ready on port 3000");
});
