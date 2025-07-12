const express = require("express");
const cors = require('cors');
const indexController = require('./controllers/indexController');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportController = require('./controllers/passportController');
const app = express();

app.use(cors()); // ALSO MAKE SURE TO SAVE THE FILE WHEN YOU MAKE CHANGES LOL

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/cheeses/:cheeseName", indexController.sendCheeseRes);
app.get("/cheeses/:cheeseName/comments", indexController.sendComments); // DONT FORGET TO USE PARAMS! THIS ALLOWED ME TO ACCESS THE SPECIFIC CHEESES'S COMMENTS AND BASICALLY WHAT MAKES IT A RESTAPI
app.get("/cheeses", indexController.sendCheesesRes);  // All other routes can be strictly front end
app.post("/sign-up", passportController.insertUser);

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            console.log('attempting log in...');
            const rows = passportController.getUserByUsername(username);
            const user = rows[0];

            if (!user) {
                return done(null, false, { message: "no such user." });
            }
            if (user.password !== password) {
                return done(null, false, { message: "incorrect password." });
            }
            console.log('logged in!');
            return done(null, user);
        } catch(err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const { rows } = passportController.getUserById(id);
        const user = rows[0];

        done(null, user);
    } catch(err) {
        done(err);
    }

});

app.post("/sign-in", 
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/"
    })
);

app.post("/postComment", indexController.postComment);



app.listen(3000, () => {
    console.log("listening at port 3000");
});