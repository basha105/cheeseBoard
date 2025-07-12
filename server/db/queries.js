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
        'SELECT cheeses.name, cheeses.id, cheeses.desc, countries.country_name, milk.milk_name FROM cheeses INNER JOIN countries ON cheeses.country_id=countries.country_id INNER JOIN milk ON cheeses.milk_id=milk.id WHERE cheeses.name = $1', [name]
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
    const rows = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return rows;
}

async function getUserByUsername(username) {
    const rows = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return rows;
}

async function insertComment(comment, cheeseID) {
    await pool.query('INSERT INTO comments (content, cheese_id) VALUES ($1, $2)', [
        comment, cheeseID
    ]);
}

async function getComments(cheese) {
    const rows = await pool.query('SELECT comments.content, comments.comment_id, cheeses.name FROM comments INNER JOIN cheeses ON comments.cheese_id = cheeses.id WHERE cheeses.name = $1', [cheese]);
    return rows;
}



module.exports = {
    getCountries,
    getCheeses,
    getCheesesByCountry,
    getCheeseByName,
    getCheeseById,
    insertUser,
    getUserById,
    getUserByUsername,
    insertComment,
    getComments
}