const express = require("express");
const cors = require('cors');
const app = express();


app.use(cors());

app.get("/", (req, res) => {
    const users = [
        {id: 1, name: "brent"},
        {id: 2, name: "cristiano"},
        {id: 3, name: "omar"},
        {id: 4, name: "ion"}
    ]

    res.json({ users })
});

app.listen(3000, () => {
    console.log("listening at port 3000");
});