require("dotenv").config();
const express = require("express");
const cors = require("cors");
const DBconnection = require("./DB");
const app = express();
const PORT = process.env.PORT || 4000;
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
DBconnection();

app.get("/", (request, response) => {
  response.send("<h2>Your App Is Live</h2>");
});

app.use("/api/about", require("./Routes/MainRoutes"));

app.use(function (req, res) {
  res
    .status(404)
    .json({ message: `Sorry, the requested URL '${req.url}' was not found!` });
});
app.listen(PORT, () => {
  console.log(`Backend listening on PORT ${PORT}`);
});
