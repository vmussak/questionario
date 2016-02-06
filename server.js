/* global process */
const express = require('express'),
  	bodyParser = require('body-parser'),
    engine = require('ejs-locals'),
    load = require('express-load'),
    error = require('./middlewares/error'),
  	app = express();


app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views','./public/views');
app.use(express.static('public'));

app.listen(app.get('port'), () =>  {
    console.log('Aplicação rodando!');
});

load('models').then('controllers').then('routes').into(app);

app.use(error.notFound);