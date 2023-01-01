import React from 'react'
import {useState,useEffect} from 'react'
function Question() {
  const [testcase, setTestcase] = useState([]);
const [result, setResult] = useState([])
const [test, setTest] = useState("")
const [res, setRes] = useState("")
const [testactive, setTestactive] = useState(false);
const [uptest, setUptest] = useState({})
const [upresult, setUpresult] = useState({})




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
const handlefinalsubmit=()=>{
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

   console.log(test);
   console.log(results);
   
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
  return (
    
<div className='container m-auto'>
  <div className='space-y-2'>
  <div className=' border-2 rounded-md border-black p-5'>
                    <h1 className='text-red-900 text-lg'>Question</h1>
                    <div>
                        <textarea className='w-[100%] border-2 rounded-md border-black p-5' name="question" id="question" rows="10"></textarea>
                    </div>
            </div>
            <div className="grid grid-cols-3 gap-1">
            <div className=' border-2 rounded-md border-black p-5 space-y-3'>
            <h1>Test cases</h1>
            <div>
              
                <div className='space-y-3'>
                 {   testcase.map((e,i)=>{
                  return(<div className='flex justify-center items-center gap-6' key={i}><div>{i}</div> <textarea  onChange={handletest} name={i}  className='overflow-hidden border-2 rounded p-1 border-gray-600' rows=""  value={evaluate(e,i)}></textarea>
                 </div>
                  )
                })
                
                }
                </div>
               <div className='space-y-3'>
                <h1>Result</h1>
                  {result.map((e,i)=>{
                      return(
                        <div key={i} className='flex justify-center items-center gap-6'><div>{i}</div> <textarea  onChange={handleres} name={i}  className='overflow-hidden border-2 rounded p-1 border-gray-600' rows=""  value={evaluate1(e,i)}></textarea></div>
                      )
                      })}
               </div>

                
              
            </div>
                   <div>
                    <div className='my-5'>
                    <button onClick={()=>{setTestactive(!testactive)}} className='border p-1 rounded-md bg-blue-700 text-white font-bold cursor-pointer'>
                    Add testcase  +
                    </button> </div>
                   {testactive&& <div className='border rounded border-black p-3'>
                    <h2>Create Testcases</h2>
                      <div >
                        <h2>Test case</h2>
                        <textarea className='border rounded border-black w-[100%]' name="testcase" id="testcase" value={test} onChange={handletestcase}></textarea>
                      </div>
                      <div >
                        <h2>Result</h2>
                        <textarea className='border rounded border-black w-[100%]' name="result" id="result" value={res} onChange={handleresult}></textarea>
                      </div>
                      <div >
                       <button onClick={updatetestcases} className='p-2 rounded-md bg-blue-700 text-white font-bold cursor-pointer'>Add</button>
                      </div>
                    </div>}
                   </div>
            </div>
            <div className=' border-2 rounded-md border-black p-5'>
                <h1>Difficulty</h1>
                <div >
                  <div>
                  <input type="radio" name="q" id="easy" />
                <label htmlFor="easy">Easy</label>
                  </div>
                  <div>
                  <input type="radio" name="q" id="medium" />
                <label htmlFor="medium">Medium</label>
                  </div>
                  <div>
                  <input type="radio" name="q" id="hard" />
                <label htmlFor="hard">Hard</label>
                  </div>
                </div>
                

            </div>
            <div className=' border-2 rounded-md border-black p-5'>
              <h1>Category</h1>
              <div>
              <label className='ll' htmlFor="category">Select category: </label>
		<select name="category">
			<option value="any">All</option>
			<option value="Math">Math</option>
			<option value="Array">Array</option>
			<option value="string">string</option>
		</select>
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
          <div>

          </div>
        </div>
      </section>
    </div>
    
    
  )
}

export default Question