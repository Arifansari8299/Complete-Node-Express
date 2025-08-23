import React, { useState } from 'react'
import './App.css'

function App() {
  const[download,setDownload] = useState(null)
  const[upload,setUpload] = useState(null)
  const[ping,setPing] = useState(null)

  const runTest = async () => {
    setDownload('Testing');
    setUpload('Testing');
    setPing('Testing');
  }
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center text-gray-800'>
      <h1 className='text-3xl font-bold mb-6 '>Internet speed test</h1>
      <button  onClick={runTest} className='bg-blue-600 text-white px-6 py-3 rounded-md cursor-pointer font-semibold hover:bg-blue-700 transition '>start test</button>
      <div className='text-xl space-y-4 mt-8'>
        <p>download : {download}</p>
        <p>upload : {upload} </p>
        <p>ping : {ping}</p>
      </div>
    </div>
  )
}

export default App
