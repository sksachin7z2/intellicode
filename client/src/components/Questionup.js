import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function Questionup() {
  let navigate=useNavigate();
    let { id } = useParams();
  const [testcase, setTestcase] = useState([]);
const [result, setResult] = useState([])
const [test, setTest] = useState("")
const [res, setRes] = useState("")

const [uptest, setUptest] = useState({})
const [upresult, setUpresult] = useState({})

const [helper, setHelper] = useState(false)
const host="http://localhost:5000"
const [question, setQuestion] = useState("")
const [difficulty, setDifficulty] = useState("easy")
const [category, setCategory] = useState("All")




const getquestion=async()=>{
    const getall=await axios.get(`${host}/api/question/getQuestion/${id}`);
    const res=getall.data;
    setQuestion(res.question);
    setTestcase(res.testcase);
    setDifficulty(res.difficulty);
    setCategory(res.category);
    setResult(res.result)
}
useEffect(() => {
 getquestion();
 // eslint-disable-next-line
}, [])

const handlecategory=(e)=>{
setCategory(e.target.value)
}

const updatetestcases=()=>{
  const re=testcase;
  re.push(test);
setTestcase(re);
const r=result;
result.push(res);
setResult(r)
setTest("");
setRes("")
console.log(testcase)
}
// const handleresize=()=>{
//   let textarea = document.getElementById("autoresizing");
//   if(textarea)
//   textarea.addEventListener('input', autoResize, false);
  
//   function autoResize() {
//       this.style.height = 'auto';
//       this.style.height = this.scrollHeight + 'px';
//     }
// }
const handleres=(e)=>{
  // let key=e.target.id;
  // const obj={};
  // obj[key]=e.target.value;
  // setUpresult({...upresult,...obj})
  setUpresult({...upresult,[e.target.name]:e.target.value})

}
const handletestcase=(e)=>{
  setTest(e.target.value);
  
  // setTestcase
}
const handletest=(e)=>{
  let key=e.target.name;
  // const obj={};
  // obj[key]=e.target.value;
  if(uptest[e.target.name])
  setUptest({...uptest,[e.target.name]:e.target.value})
  else
  {
    const obj={};
  obj[key]=e.target.value;
  setUptest({...uptest,...obj})
  }
}
const handleresult=(e)=>{
  setRes(e.target.value);
}
// console.log(testcase)
const handlefinalsubmit=async()=>{
  const test=[];
  const results=[];
   for(let i=0;i<testcase.length;i++){
    if(uptest[i])
    test[i]=uptest[i];
    else if(uptest[i]==="")
    test[i]=""
    else
    test[i]=testcase[i]
   }
   for(let i=0;i<result.length;i++){
    if(upresult[i])
    results[i]=upresult[i];
    else if(upresult[i]==="")
    results[i]=""
    else
    results[i]=result[i]
   }
// console.log(question)
//    console.log(test);
//    console.log(results);
//    console.log(difficulty);
//    console.log(category);
const res=await axios.put(`${host}/api/question/updateQuestion/${id}`,{question:question,testcase:test,result:results,difficulty:difficulty,category:category});
const resp=res.data;
console.log(resp)
   navigate('/question')
   }
   const evaluate=(e,i)=>{
    if(uptest[i]){
      return uptest[i]
    }
    else if(uptest[i]==="")
    return ""
    else
    return e;
    
}
const evaluate1=(e,i)=>{
  if(upresult[i]){
    return upresult[i]
  }
  else if(upresult[i]==="")
  return ""
  else
  return e;
  
}
const handlequestion=(e)=>{
  setQuestion(e.target.value);
}
const handledifficulty=(e)=>{
setDifficulty(e.target.value);
}
const handledeletetest=(i)=>{
delete uptest[i];
delete upresult[i]
let arr=testcase;
arr.splice(i,1);
let arr2=result;
arr2.splice(i,1)

setTestcase(arr2)
setTestcase(arr);
setHelper(!helper)
}

  return (
    
<div className='container m-auto'>
  
  <div className='space-y-2'>
  <div className=' border-2 rounded-md border-black p-5'>
    <div className='flex justify-between'>
                    <h1 className='text-lg font-bold'>Question</h1>
                    <div >
              
              <h1 className='text-lg font-bold'>Difficulty</h1>
              <div  className='flex gap-3'>
                <div>
                <input checked={(difficulty==='easy')?true:false}  type="radio" name="q" id="easy" value="easy" onChange={handledifficulty}/>
              <label htmlFor="easy">Easy</label>
                </div>
                <div>
                <input checked={(difficulty==='medium')?true:false} type="radio" name="q" id="medium"  value="medium" onChange={handledifficulty}/>
              <label htmlFor="medium">Medium</label>
                </div>
                <div>
                <input checked={(difficulty==='hard')?true:false} type="radio" name="q" id="hard" value="hard" onChange={handledifficulty}/>
              <label htmlFor="hard">Hard</label>
                </div>
              </div>
              

          </div>
          <div >
            <h1 className='text-lg font-bold'>Category</h1>
            <div>
            <label className='ll' htmlFor="category">Select category: </label>
  <select name="category" onChange={handlecategory}>
    <option value="any">All</option>
    <option value="Math">Math</option>
    <option value="Array">Array</option>
    <option value="string">string</option>
  </select>
            </div>
          </div>
    </div>
                    <div>
                        <textarea onChange={handlequestion} value={question} className='w-[100%] border-2 rounded-md border-black p-5' name="question" id="question" rows="10"></textarea>
                    </div>
            </div>
            <div className=''>
            <div className=' border-2 rounded-md border-black p-5 space-y-3 grid grid-cols-2'>
              <div>
              <h1 className='text-lg font-bold'>Test cases</h1>
            <div>
              
                <div className='space-y-3'>
                 {   testcase.map((e,i)=>{
                  return(<div className='flex  items-center gap-6' key={i}><div>{i}</div> <textarea  onChange={handletest} name={i}  className='overflow-hidden border-2 rounded p-1 border-gray-600' rows=""  value={evaluate(e,i)}></textarea>
                  <div onClick={()=>{handledeletetest(i)}}>X</div>
                 </div>
                  )
                })
                
                }
                </div>
               <div className='space-y-3'>
                <h1 className='text-lg font-bold'>Result</h1>
                  {result.map((e,i)=>{
                      return(
                        <div key={i} className='flex  items-center gap-6'><div>{i}</div> <textarea  onChange={handleres} name={i}  className='overflow-hidden border-2 rounded p-1 border-gray-600' rows=""  value={evaluate1(e,i)}></textarea><div onClick={()=>{handledeletetest(i)}}>X</div></div>
                      )
                      })}
               </div>

                
              
            </div>
              </div>
          
                   <div >
                    {/* <div className='my-5'>
                    <button onClick={()=>{setTestactive(!testactive)}} className='border p-1 rounded-md bg-blue-700 text-white font-bold cursor-pointer'>
                    Add testcase  +
                    </button> </div> */}
                    <div className='border rounded border-black p-3'>
                    <h2 className='text-lg font-bold' >Create Testcases</h2>
                      <div >
                        <h2 className='text-lg font-bold'>Test case</h2>
                        <textarea className='border rounded border-black w-[100%]' name="testcase" id="testcase" value={test} onChange={handletestcase}></textarea>
                      </div>
                      <div >
                        <h2 className='text-lg font-bold'>Result</h2>
                        <textarea className='border rounded border-black w-[100%]' name="result" id="result" value={res} onChange={handleresult}></textarea>
                      </div>
                      <div >
                       <button onClick={updatetestcases} className='p-2 rounded-md bg-blue-700 text-white font-bold cursor-pointer'>Add</button>
                      </div>
                    </div>
                   </div>
            </div>
 
            </div>

          <div className='text-center'>
            <button onClick={handlefinalsubmit} className='border p-1 rounded-md bg-blue-700 text-white font-bold cursor-pointer'>Update</button>
          </div>
           
  </div>
            

    
    </div>
    
    
  )
}

export default Questionup