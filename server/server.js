const express = require("express");
const cors = require('cors');
const indexController = require('./controllers/indexController');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportController = require('./controllers/passportController');
const app = express();

app.use(cors());

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

app.get("/cheeses/:cheeseName", indexController.sendCheeseRes); // Only necessary to create these routes because they retrieve data from db
app.get("/cheeses", indexController.sendCheesesRes);  // All other routes can be strictly front end
app.post("/sign-up", passportController.insertUser); // I removed the BS that was getting in the way of calling this function

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
        successRedirect: "/cheeses",
        failureRedirect: "/cheeses"
    })
);

app.listen(3000, () => {
    console.log("listening at port 3000");
});