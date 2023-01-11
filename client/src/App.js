import React from 'react'
import 
{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Questionup from './components/Questionup'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Question from './components/Question'
function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/question' element={<Question/>}/>
      <Route exact path='/question/edit/:id' element={<Questionup/>}/>

    </Routes>
   </Router>
  )
}

export default App