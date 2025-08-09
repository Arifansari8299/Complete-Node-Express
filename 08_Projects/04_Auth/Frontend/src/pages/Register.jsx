import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const[formData,setFormData]= useState({
    name:"",
    email:"",
    password:""
  })
 const navigate = useNavigate()

 const handleSubmit = async(e) => {
   e.preventDefault();
   
  }
  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-10 p-6 bg-white shadow-md '>
     <h2 className='text-2xl font-bold text-center mb-4'>Resister</h2>
     <input type="text" placeholder='Name' onChange={(e)=> setFormData({ ...formData, name: e.target.value })} className='w-full mb-3 p-2 border rounded-2xl' required/>
     <input type="email" placeholder='Email' onChange={(e)=> setFormData({...formData, email: e.target.value})} className='w-full mb-3 p-2 border rounded-2xl' required />
     <input type="password" placeholder='password' onChange={(e)=> setFormData({...formData, password: e.target.value})} className='w-full mb-3 p-2 border rounded-2xl' />
     <button type="submit" className='w-full bg-blue-500 p-2 text-white rounded'>Submit</button>
    </form>
  )
}

export default Register