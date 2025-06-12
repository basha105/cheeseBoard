const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json(
        { "users": ["cristiano", "brent", "omar"] }
    );
});

app.listen(3000, () => {
    console.log("listening at port 3000");
});