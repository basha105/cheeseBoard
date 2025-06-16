const pool = require('./pool');

async function getCountries() {
    const countries = await pool.query("SELECT * FROM countries");
    return countries;
}

module.exports = {
    getCountries
}