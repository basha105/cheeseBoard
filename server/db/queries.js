const pool = require('./pool');

async function getCountries() {
    const countries = await pool.query("SELECT * FROM countries");
    return countries;
}

async function getCheeses() {
    const cheeses = await pool.query("SELECT * FROM cheeses");
    return cheeses;
}

async function getCheesesByCountry(country){
    const cheeses = await pool.query("SELECT cheeses.name, countries.country_name INNER JOIN countries ON cheeses.country_id=countries.country_id WHERE countries.country_name = $1", [country]);
    return cheeses;
}

async function getCheeseByName(name) {
    const cheese = await pool.query(
        'SELECT cheeses.name, cheeses.desc, countries.country_name, milk.milk_name FROM cheeses INNER JOIN countries ON cheeses.country_id=countries.country_id INNER JOIN milk ON cheeses.milk_id=milk.id WHERE cheeses.name = $1', [name]
    );
    return cheese;
}

async function getCheeseById(id) {
    const cheese = await pool.query(`SELECT * FROM cheeses WHERE id = ${id}`);
    return cheese;
}

async function insertUser(username, password) {
    await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [
        username,
        password
    ]);
}

async function getUserById(id) {
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return user;
}

module.exports = {
    getCountries,
    getCheeses,
    getCheesesByCountry,
    getCheeseByName,
    getCheeseById,
    insertUser,
    getUserById
}