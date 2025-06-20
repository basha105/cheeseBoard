const express = require("express");
const cors = require('cors');
const indexController = require('./controllers/indexController');

const app = express();

app.use(cors());

app.get("/cheeses/:cheeseName", indexController.sendCheeseRes);
app.get("/cheeses", indexController.sendCheesesRes);


app.listen(3000, () => {
    console.log("listening at port 3000")
});