const User = require ("./day17.js")
const mongoose = require("mongoose")
const express = require('express');
require("dotenv").config();
const app = express();
const PORT = 3000;
mongoose.connect(`${process.env.MONGO_URL}day17-DB`)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});
async function getAllUsers(req, res) {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      console.error('Error retrieving users:', err.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
app.get('/users', getAllUsers);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
