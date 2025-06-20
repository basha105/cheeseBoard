const pool = require('./pool');

async function getCountries() {
    const countries = await pool.query("SELECT * FROM countries");
    return countries;
}

async function getCheeses() {
    const cheeses = await pool.query("SELECT * FROM cheeses");
    return cheeses;
}

async function getCheeseById(id) {
    const cheese = await pool.query(`SELECT * FROM cheeses WHERE id=${id}`);
    return cheese;
}

module.exports = {
    getCountries,
    getCheeses,
    getCheeseById
}