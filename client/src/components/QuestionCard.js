import React from 'react'

function QuestionCard({question,difficulty,type}) {
  return (
    <div className='rounded p-3'>
        <div>
            <div  className='text-lg font-bold'>
                {question}
            </div>
            <div className='text-lg font-bold'>
                {difficulty}
            </div>
            <div className='text-lg font-bold'>
                {type}
            </div>

        </div>
    </div>
  )
}

export default QuestionCard