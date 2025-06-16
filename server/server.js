const express = require("express");
const cors = require('cors');
const indexController = require('./controllers/indexController');

const app = express();

app.use(cors());
app.get("/countries", indexController.displayCountries);

app.listen(3000, () => {
    console.log("listening at port 3000")
});