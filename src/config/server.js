const express =require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//settinngs
app.set(app.set('port'), process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views' path.join(_dirname, '..?app?views'));

//mdiddleware
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;