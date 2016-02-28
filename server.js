var express = require('express');
var app = express();
var PORT = 3000;
app.use(express.static(__dirname));

app.listen(PORT);
console.log('%s: Node server started on %d', Date(Date.now() ), PORT);