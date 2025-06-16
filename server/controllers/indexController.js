const db = require('../db/queries');

async function displayCountries(req, res) {
    const { rows } = await db.getCountries();
    res.json(rows);
}

module.exports = {
    displayCountries
}