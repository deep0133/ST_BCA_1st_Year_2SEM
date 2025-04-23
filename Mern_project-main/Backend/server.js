const express = require("express");
const cors = require("cors");
const router = require("./authRouter/authRoute");
const {mongoose} =  require("mongoose")
const dotenv = require("dotenv").config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DataBase Connected")
}).catch((err) => {
    console.log("DataBase not Connected" , err)
})

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/auth" , router)



app.listen(3000, ()=> {

    console.log("Server is Started !!")
})