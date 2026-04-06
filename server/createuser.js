const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/duckmail');

async function createUser(username, plainPassword) {
  const existingUser = await User.findOne({ username });

  if (existingUser) {
      throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const user = new User({
    username: username,
    password: hashedPassword
  });

  await user.save();

  console.log("User created with hashed password ✅");
  mongoose.disconnect();
}

module.exports = createUser;