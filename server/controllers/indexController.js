const db = require('../db/queries');

async function displayCountries(req, res) {
    const { rows } = await db.getCountries();
    res.json(rows);
}

async function sendCheesesRes(req, res) {
    const { rows } = await db.getCheeses();
    res.json(rows);
}

async function sendCheeseRes(req, res) {
    const { cheeseName } = req.params;
    const { rows } = await db.getCheeseByName(cheeseName);
    res.json(rows[0]);
}

async function insertUser(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    try {
        await db.insertUser(username, password);
        res.json({ message: "Profile created!" });
        
    } catch(err) {
        return next(err);
    }
};

async function getUserById(id) {
    const { rows } = await db.getUserById(id);
    return rows;
}

module.exports = {
    displayCountries,
    sendCheesesRes,
    sendCheeseRes,
    insertUser,
    getUserById
}