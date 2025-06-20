const db = require('../db/queries');

async function displayCountries(req, res) {
    const { rows } = await db.getCountries();
    res.json(rows);
}

async function sendCheesesRes(req, res) {
    const { rows } = await db.getCheeses();
    console.log(rows);
    res.json(rows);
}

async function sendCheeseRes(id, req, res) {
    const { rows } = await db.getCheeseById(id);
    const cheese = rows[0];
    res.json(cheese);
}

module.exports = {
    displayCountries,
    sendCheesesRes,
    sendCheeseRes
}