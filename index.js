const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const router = require('./router/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router)

app.listen(3200, () => {
    console.log('API RUN!')
});