const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

if (process.env.NODE_ENV != "production") dotenv.config();

const app = express();
const port = process.env.PORT || 8012;

app.use("/assets", express.static(path.resolve() + "/assets"));
app.use(bodyParser.json());
app.use("/api/cards", require('./api/cards.js'));

if (process.env.NODE_ENV == "production") {
  app.use("/", express.static(path.resolve() + "/dist"));
} else {
  app.use("/", require("./middleware/webpack.js"));
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});