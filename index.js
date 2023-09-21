require('dotenv').config();

const path = require('path');
const express = require('express');
const router = require('./app/routers');

const PORT = process.env.PORT;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, './assets')))

app.use(router);

app.listen(PORT, _ => {
   console.log(`Our server is listening on http://localhost:${PORT}`);
});