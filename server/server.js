const express = require("express");
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; 
const cors = require('cors');
const indexController = require('./controllers/indexController');

const app = express();

app.use(cors());
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
            const user = rows[0];
            if (!user) {
                return done(null, false, { message: "incorrect username" });
            }
            if (user.password !== password) {
                return done(null, false, { message: "incorrect password" });
            }
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
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        const user = rows[0];
        done(null, user);
    } catch(err) {
        done(err);
    }
});

app.get("/cheeses/:cheeseName", indexController.sendCheeseRes); // Only necessary to create these routes because they retrieve data from db
app.get("/cheeses", indexController.sendCheesesRes);  // All other routes can be strictly front end
app.post("/sign-up", indexController.insertUser);
app.post("/sign-in", 
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/"
    })
);

app.listen(3000, () => {
    console.log("listening at port 3000")
});