import express from 'express';
import connectDB from './db/connectDB.js';
import router from './routes/web.js'
import {join} from 'path'
const app = express()
const port = 4000
const DATABASE_URL = "mongodb://localhost:27017/crudOpration ";

// --------connect to database--------
connectDB(DATABASE_URL)

app.use(express.urlencoded({extended:false}))
// ---------static files---------
app.use(express.static(join(process.cwd(),"public")))

// --------set Engine------
app.set("view engine","ejs")

// ---------Load Routes---------
app.use("/student",router)


app.listen(port,()=>{console.log("we are connectrd to server 4000 ---")})