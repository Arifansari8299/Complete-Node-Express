import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Resister from './pages/Resister'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'

const App = () => {
  return (
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path = "/dashboard" element={<Dashboard/>}/>
  </Routes>
 </BrowserRouter>
  )
}

export default App  