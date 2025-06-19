const pool = require('./pool');

async function getCountries() {
    const countries = await pool.query("SELECT * FROM countries");
    return countries;
}

async function getCheeses() {
    const cheeses = await pool.query("SELECT * FROM cheeses");
    return cheeses;
}

module.exports = {
    getCountries,
    getCheeses
}