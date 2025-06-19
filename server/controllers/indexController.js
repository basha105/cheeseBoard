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

module.exports = {
    displayCountries,
    sendCheesesRes
}