const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://127.0.0.1:27017/duckmail');

const User = mongoose.model('User', {
  username: String,
  password: String
});

async function createUser(username, plainPassword) {
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const user = new User({
    username: username,
    password: hashedPassword
  });

  await user.save();

  console.log("User created with hashed password ✅");
  mongoose.disconnect();
}

createUser("RichardDuck", "iloveducks");