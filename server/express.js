const express = require('express');

const app = express();
const port = 5503;

app.use(express.static('../client'));
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
    res.send("Form submitted!, Welcome to Duck Mail, " + req.body.text + " " + req.body.text1);
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log("Press Ctrl+C to stop the server.");
});