const db = require('../db/queries');

async function insertUser(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    console.log('new user! username:' + username + ' password: ' + password);

    try {
        await db.insertUser(username, password);

    } catch(err) {
        return next(err);
    }
    res.json('');
};

async function getUserById(id) {
    const { rows } = await db.getUserById(id);
    return rows;
}

async function getUserByUsername(username) {
    const { rows } = await db.getUserByUsername(username);
    return rows;
}

module.exports = {
    insertUser,
    getUserById,
    getUserByUsername
}

