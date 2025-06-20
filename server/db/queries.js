const pool = require('./pool');

async function getCountries() {
    const countries = await pool.query("SELECT * FROM countries");
    return countries;
}

async function getCheeses() {
    const cheeses = await pool.query("SELECT * FROM cheeses");
    return cheeses;
}

async function getCheeseByName(name) {
    const cheese = await pool.query(
        'SELECT cheeses.name, countries.country_name FROM cheeses INNER JOIN countries ON cheeses.country_id=countries.country_id WHERE cheeses.name = $1', [name]
    );
    return cheese;
}

async function getCheeseById(id) {
    const cheese = await pool.query(`SELECT * FROM cheeses WHERE id = ${id}`);
    return cheese;
}

module.exports = {
    getCountries,
    getCheeses,
    getCheeseByName,
    getCheeseById
}