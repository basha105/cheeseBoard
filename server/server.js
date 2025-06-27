const express = require("express");
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; 
const cors = require('cors');
const indexController = require('./controllers/indexController');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/cheeses/:cheeseName", indexController.sendCheeseRes); // Only necessary to create these routes because they retrieve data from db
app.get("/cheeses", indexController.sendCheesesRes);  // All other routes can be strictly front end


app.listen(3000, () => {
    console.log("listening at port 3000");
});