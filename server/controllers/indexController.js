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

module.exports = {
    displayCountries,
    sendCheesesRes,
    sendCheeseRes
}