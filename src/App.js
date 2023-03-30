import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Lucky from './components/Lucky'
// import Lucky from './components/Lucky'
import SignUp from './components/SignUp'
// import Quiz from './components/Quiz'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <Lucky/>
    </BrowserRouter>

    </div>
  )
}

export default App
