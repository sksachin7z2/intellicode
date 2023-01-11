import  express  from "express";
import { Question } from "../model/Question.js";
const router = express.Router()

router.post('/addQuestion',async(req,res)=>{
    const {question,testcase,result,difficulty,category} =req.body;
    try {
        const obj={
            question,testcase,result,difficulty,category
        }
        await Question.create(obj);
        res.json({status:"question added",obj})
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})
router.get('/getallQuestions',async(req,res)=>{
    try {
        const all=await Question.find();
        res.json(all)
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
       
})
router.put('/updateQuestion/:id',async(req,res)=>{
    const {id}=req.params
    const {question,testcase,result,difficulty,category} =req.body;
    try {
        const upquestion=await Question.findByIdAndUpdate(id,{question,testcase,result,difficulty,category},{new:true});
        res.json({status:"updated question",updated:upquestion})
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})
router.delete('/deleteQuestion/:id',async(req,res)=>{
    const {id}=req.params
   
    try {
        const upquestion=await Question.findByIdAndDelete(id);
        res.json({status:"deleted question",deleted:upquestion})
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})
router.get('/getQuestion/:id',async(req,res)=>{
try {
    const question=await Question.findById(req.params.id);
    res.json(question)
} catch (error) {
    console.log(error);
    res.send("internal Server Error")
}
})

export default router