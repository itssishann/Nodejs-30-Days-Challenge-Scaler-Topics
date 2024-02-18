const mongoose = require('mongoose');
require("dotenv").config();
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

 const User = mongoose.model('User', userSchema);

mongoose.connect(`${process.env.MONGO_URL}day17-DB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

async function addUserToDatabase(user) {
  try {
    const newUser = new User({
      username: user.username,
      email: user.email
    });
    await newUser.save();

    // console.log('User added successfully:', newUser); comment because in day18 it is logging users
  } catch (error) {
    console.error('Error adding user to database:', error.message);
  }
}

addUserToDatabase({ username: 'john doe', email: 'john@example.com' });
module.exports= User