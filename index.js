// import express from 'express';
// import { engine } from 'express-handlebars';
// import path from 'path';

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')

const app = express();
const port = 4000

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
// Create an instance of the engine using the exphbs() method
const hbs = exphbs.create();  // This will give you the handlebars engine

app.engine('handlebars', hbs.engine); // Use the engine function
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); // Set views directory (optional but useful)


app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
});
