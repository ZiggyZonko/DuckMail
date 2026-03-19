const express = require('express');
const path = require('path');

const app = express();
const port = 5503;

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/duckmail')
  .then(() => console.log("Connected to MongoDB 🦆"))
  .catch(err => console.log(err));

app.use(express.static('../client'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', '../client'); // Tell Express where your files are

app.post("/submit", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    console.log(`Received form submission: Email=${email}, Password=${password}`);
    res.render('postmethod', { email: email, password: password });
    //res.send("Form submitted!, Welcome to Duck Mail, " + req.body.email + " " + req.body.password);
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log("Press Ctrl+C to stop the server.");
});