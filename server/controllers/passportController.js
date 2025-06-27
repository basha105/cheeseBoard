async function insertUser(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    try {
        await db.insertUser(username, password);
        res.json({ message: "Profile created!" });
        
    } catch(err) {
        return next(err);
    }
};

async function getUserById(id) {
    const { rows } = await db.getUserById(id);
    return rows;

}