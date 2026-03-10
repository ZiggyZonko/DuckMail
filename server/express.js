const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 5503;

app.use(express.static('../client'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); // To support JSON-encoded bodies

app.post("/submit", (req, res) => {
    res.send("Form submitted!, Welcome to Duck Mail, " + req.body.email + " " + req.body.password);
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log("Press Ctrl+C to stop the server.");
});