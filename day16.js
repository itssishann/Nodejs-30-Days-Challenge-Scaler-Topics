// 16. Problem: MongoDB Connection Setup
const mongoose = require ("mongoose")
require("dotenv").config();
async function connectToMongoDB(){
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log(`DB CONNECTED`);
    })
    .catch((e)=>{
        console.log(`DB CONNCTION FAILED --> ${e}`)
        process.exit(1)
    })
}           
connectToMongoDB()