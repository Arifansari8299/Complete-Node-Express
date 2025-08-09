import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <div className='p-10 text-center'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to Dashboard</h1>
      <button onClick={handleLogout} className='bg-green-400 hover:bg-green-600 transition duration-300 cursor-pointer px-4 py-2 text-white rounded'>Logout</button>
    </div>
  )
}

export default Dashboard