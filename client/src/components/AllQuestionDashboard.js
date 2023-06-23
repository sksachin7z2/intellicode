import axios from 'axios';
import React,{useState,useEffect} from 'react'
import QuestionCard from './QuestionCard';

function AllQuestionDashboard() {
    const [filter, setFilter] = useState({difficulty:"all",type:"all",todo:"unsolved"});
    const handlechange=(e)=>{
        setFilter({...filter,[e.target.name]:e.target.value});
    }
    const [allQuestion, setAllQuestion] = useState([])
    const host="http://localhost:5000";
    const getAllQuestion=async()=>{
        const res=await axios.get(`${host}/api/question/getallQuestions`);
        const d=res.data;
        setAllQuestion(d.data)
    }
    useEffect(() => {
      getAllQuestion()
    }, [])
    
  return (
    <div className='container m-auto'>
        <div className='grid grid-cols-4'>
            <div>
            <label className='ll' htmlFor="difficulty">Select Difficulty: </label>
                <select name="difficulty" id="difficulty" onChange={handlechange}>
                    
                    <option value="all">ALL</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
            </div>
            <div>
            <label className='ll' htmlFor="type">Select type: </label>
            <select name="type" id="type" onChange={handlechange}>
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
                    {/* <option value="string"></option>
                    <option value="string"></option> */}
                </select>
            </div>
            <div>
            <label className='ll' htmlFor="todo">Select Status: </label>
            <select name="todo" id="todo" onChange={handlechange}>
                    <option value="unsolved">unsolved</option>
                    <option value="solved">solved</option>
                </select>
            </div>
            <div>
                <button className='p-3 bg-green-500 font-bold'>Filter</button>
            </div>
        </div>
        <section>
            {
                allQuestion.map((e,i)=>{

                    return (
                        <div key={i}>
                            <QuestionCard  question={e.
questionName} type={e.category} difficulty={e.difficulty}/>
                        </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default AllQuestionDashboard