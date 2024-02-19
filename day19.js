const mongoose = require('mongoose');
require("dotenv").config();
mongoose.connect(`${process.env.MONGO_URL}day19-DB`)

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /\S+@\S+\.\S+/.test(v); 
      },
      message: props => `${props.value} is not a valid email address!`
    }
  }
});
const User = mongoose.model('User', userSchema);
async function addUserWithValidation(user) {
    try {
      const newUser = new User(user);
      await newUser.save();
      console.log('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error.message);
    }
  }

// Test Case
addUserWithValidation({ username: 'john_doe', email: 'invalid-email' });
addUserWithValidation({ username: 'john_doe', email: 'user@email.com' });
