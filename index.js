import express from "express"
import cors from "cors"
import { mongoconnect } from "./db.js";
mongoconnect()
import question from './routes/question.js'
const PORT=5000
const app=express();
app.use(express.json());
app.use(cors());
app.use('/api/question',question)


app.listen(PORT,()=>{
    console.log("server is runningat 5000");
})