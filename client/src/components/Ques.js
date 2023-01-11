import React from 'react'

function Ques({question,testcase,result,difficulty,category}) {
  return (
    <div >
        <div>
          <div>
          <h1 className='text-lg font-bold'>Question</h1>
            <div className=''>
              <textarea className='w-[100%] p-3 border-2 border-black rounded '   value={question} readOnly>

              </textarea>
             
            </div>
          </div>
          <div className="flex justify-between">
          <div>
            <h1 className='text-lg font-bold'>Difficulty</h1>
            <div>
            {difficulty}
            </div>
            
          </div>
          <div>
            <h1 className='text-lg font-bold'>Category</h1>
            <div>
            {category}
            </div>
            
          </div>
          </div>
        <div className="flex justify-between">
        <div>
            <h1 className='text-lg font-bold'>Testcase</h1>
            <div>
            {
              testcase.map((e,i)=>{
                return <div className='flex gap-3 items-center' key={i}><div>{i}</div><textarea className='w-[100%]' readOnly value={e}></textarea> </div>
              })
            }
            </div>
           
          </div>
          <div>
            <h1 className='text-lg font-bold'>Result</h1>
            <div>
            {
              result.map((e,i)=>{
                return <div className='flex gap-3 items-center' key={i}><div>{i}</div><textarea className='w-[100%]' readOnly value={e}></textarea> </div>
              })
            }
            </div>
           
          </div>
        </div>
        
        </div>
       
    </div>
  )
}

export default Ques