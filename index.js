require('dotenv').config();
const express = require('express');
const app = express();
//const session = require('express-session')

const router = require('./app/routers');

// Permet de récupérer les données d'un formulaire simple
// nous donne la variable request.body
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('assets'));

app.use(router);

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

app.listen(PORT, () => {
   console.log(`Our server is listening on ${BASE_URL}:${PORT}`);
});