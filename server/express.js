const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const port = 5503;

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/duckmail')
  .then(() => console.log("Connected to MongoDB 🦆"))
  .catch(err => console.log(err));

const User = mongoose.model('User', {
  username: String,
  password: String
});

app.use(express.static('../client'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', '../client'); // Tell Express where your files are

app.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username: username });

    if (!user) {
        return res.send("Invalid username or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.send("Invalid username or password");
    }

    res.send("Welcome " + username + " 🦆");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log("Press Ctrl+C to stop the server.");
});

