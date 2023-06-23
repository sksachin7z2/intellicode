import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Ques from './Ques';
function Question() {
  const [testcase, setTestcase] = useState([]);
const [result, setResult] = useState([])
const [test, setTest] = useState("")
const [res, setRes] = useState("")
const [testactive, setTestactive] = useState(false);
const [uptest, setUptest] = useState({})
const [upresult, setUpresult] = useState({})

const [helper, setHelper] = useState(false)
const host="http://localhost:5000"
const [question, setQuestion] = useState("")
const [questionName, setQuestionname] = useState("")
const [difficulty, setDifficulty] = useState("easy")
const [category, setCategory] = useState("All")
const [data, setData] = useState([])

const getquestion=async()=>{
    const getall=await axios.get(host+"/api/question/getallQuestions");
    const res=getall.data;
    setData(res.data)
}
useEffect(() => {
 getquestion();
}, [data])


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
const res=await axios.post('http://localhost:5000/api/question/addQuestion',{questionName:questionName,question:question,testcase:test,result:results,difficulty:difficulty,category:category});
const resp=res.data;
console.log(resp)
   
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
const handlequestionname=(e)=>{
  setQuestionname(e.target.value);
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
let navigate=useNavigate()
const handleupdatepage=(e)=>{
navigate('/question/edit'+`/${e}`);
}
const handledeletequestion=async(id)=>{
  const res=await axios.delete(host+`/api/question/deleteQuestion/${id}`);
  const resp=res.data;
  getquestion()

}
  return (
    
<div className='container m-auto'>
  <div className='space-y-2'>
  <div className=' border-2 rounded-md border-black p-5'>
    <div className='flex justify-between'>
                    <div className='text-lg font-bold space-y-3'> <h1>Question</h1> <div ><input className='border-2 border-black px-2 rounded-sm'  type="text" onChange={handlequestionname} value={questionName}></input></div>  </div>
                    <div >
              
              <h1 className='text-lg font-bold'>Difficulty</h1>
              <div  className='flex gap-3'>
                <div>
                <input type="radio" name="q" id="easy" value="easy" onChange={handledifficulty}/>
              <label htmlFor="easy">Easy</label>
                </div>
                <div>
                <input type="radio" name="q" id="medium"  value="medium" onChange={handledifficulty}/>
              <label htmlFor="medium">Medium</label>
                </div>
                <div>
                <input type="radio" name="q" id="hard" value="hard" onChange={handledifficulty}/>
              <label htmlFor="hard">Hard</label>
                </div>
              </div>
              

          </div>
          <div >
            <h1 className='text-lg font-bold'>Category</h1>
            <div>
            <label className='ll' htmlFor="category">Select category: </label>
  <select name="category" onChange={handlecategory}>
  <option value="all">All</option>
                    <option value="math">math</option>
                    <option value="array">array</option>
                    <option value="string">string</option>
                    <option value="greedy">greedy</option>
                    <option value="stack">stack</option>
                    <option value="queue">queue</option>
                    <option value="tree">tree</option>
                    <option value="graph">graph</option>
                    <option value="dynamic_programming">dynamic programming</option>
                    <option value="linkedlist">linkedlist</option>
                    <option value="sorting">sorting</option>
  </select>
            </div>
          </div>
    </div>
                    <div className='my-2'>
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
            <button onClick={handlefinalsubmit} className='border p-1 rounded-md bg-blue-700 text-white font-bold cursor-pointer'>Submit</button>
          </div>
           
  </div>
            

      <section>
        <div>
          <div>
              <h1>All Question</h1>
          </div>
          <div className='grid grid-cols-3 gap-2'>
              {
                data.map((e,i)=>{
                  return(<div className='p-5 rounded border-2 border-blue-500 shadow-lg'>
                             <div className='flex justify-end gap-5 relative bottom-0'>
              <div>
                <button onClick={()=>{handleupdatepage(e._id)}} className='bg-blue-700 text-white rounded-md px-3 py-2'> Edit</button>
              </div>
              <div>
                <button onClick={()=>{handledeletequestion(e._id)}} className='bg-red-700 text-white rounded-md px-3 py-2'> Delete</button>
              </div>
        </div>
                    <Ques key={i} questionName={e.questionName} question={e.question} testcase={e.testcase} result={e.result} difficulty={e.difficulty} category={e.category} />
              
                    </div> 

                  )
                })
              }
          </div>
        </div>
      </section>
    </div>
    
    
  )
}

export default Question