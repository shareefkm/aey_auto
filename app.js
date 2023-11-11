import express  from "express";
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan";

import userRout from "./routes/user.js";
import driverRout from "./routes/driver.js";
import adminRout from "./routes/admin.js";
import connectDB from "./config/db.js";

const app = express()
dotenv.config()

connectDB()

const port = process.env.PORT 

app.use(express.json({limit : "10mb"}))
app.use(cors())

app.use('/',userRout);
app.use('/driver', driverRout);
app.use('/admin', adminRout)

app.listen(port, ()=>{
    console.log(`server connected ${port}`);
})