require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session')

const router = require('./app/routers');

// Permet de récupérer les données d'un formulaire simple
// nous donne la variable request.body
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('assets'));

app.use(session({
   resave: true,
   secret: process.env.SESSION_SECRET,
   saveUninitialized: true,
   cookie: {
      secure: false, //it's when it's not https
      maxAge: 1000 * 60 * 60
   }
}));

app.use((req, res, next) => {
//Permet de renvoyer les données de sessions aux views
   app.locals.session = req.session;
   next();
})

app.use(router);

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

app.listen(PORT, () => {
   console.log(`Our server is listening on ${BASE_URL}:${PORT}`);
});