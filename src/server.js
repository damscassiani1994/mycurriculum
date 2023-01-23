const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('/dist/brief-case'));

app.get('/*', function(req,res) {
res.sendFile(path.join('/dist/brief-case/index.html'));
});

app.listen(process.env.PORT || 5000);