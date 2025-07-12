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

async function postComment(req, res) {
    const { comment, cheeseID } = req.body;
    await db.insertComment(comment, cheeseID);
    res.json({message: 'true' });
}

module.exports = {
    displayCountries,
    sendCheesesRes,
    sendCheeseRes,
    postComment
}