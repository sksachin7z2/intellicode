import express from "express"
import cors from "cors"

const app=express();
app.use(cors());



app.listen(PORT,()=>{
    console.log("server is runningat 5000");
})