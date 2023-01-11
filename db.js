import mongoose from 'mongoose'
const url="mongodb://localhost:27017/platform";
mongoose.set('strictQuery', true);
 const mongoconnect=()=>{
    mongoose.connect(url,()=>{
        console.log("mongo connected");
    })
}
export {mongoconnect}