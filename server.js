'use strict';

var express = require('express');
var multer  = require('multer');
require('dotenv').load();
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

var app = express();

app.use(express.static('public'));

//store file in memory, not on disk
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.post('/inspect', upload.single('input'), function (req, res) {
    var output = {
        "name": req.file.originalname,
        "encoding": req.file.encoding,
        "mimetype": req.file.mimetype,
        "size": req.file.size
    };
    res.json(output)
})

var port = process.env.PORT;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port + '...');
});
