const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const passportConfig = require('./passportConfig');
const session = require('express-session');

const db = process.env.DB || 'mongodb://127.0.0.27017/e-commerce-app';
const connect = mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true});
connect.then(db => {
    console.log("connected to the database!");
}, err => console.log(err) );

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET || "islam-secret-password-random-196020012021",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

const port = process.env.PORT || "8000";
const host = "0.0.0.0";

app.listen(host, port, () => {
    console.log(`API running at ${host}:${port}`);
})