import React from 'react'

function Question() {
  return (
    
<div className='container m-auto'>
  <div>
  <div>
                    <h1 className='text-red-900 text-lg'>Question</h1>
                    <div>
                        <textarea className='w-[100%]' name="question" id="question" rows="10"></textarea>
                    </div>
            </div>
            <div className="grid grid-cols-2">
            <div>
            <h1>Test cases</h1>
                    <div>
                        <textarea className='w-[100%]' name="testcases" id="testcases" rows="10"></textarea>
                    </div>
            </div>
            <div>
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
            <div>
              <h1>Category</h1>
              <div>
                
              </div>
            </div>
            </div>
           
  </div>
            
    </div>
    
    
  )
}

export default Question