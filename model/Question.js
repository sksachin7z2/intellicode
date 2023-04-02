import mongoose from "mongoose";
const {Schema} =mongoose
const schema=new Schema({
    questionName:{
          type:String,
          default:"" 
    },
    question:{
        type:String,
        required:true
    },
    testcase:{
        type:Array,
        required:true
    },
    result:{
        type:Array,
        required:true
    },
    difficulty:{
        type:String,
        required:true
    },
    category:{
type:String,
required:true
    }
    
},{timestamps:true});

export const Question=mongoose.model('question',schema);
