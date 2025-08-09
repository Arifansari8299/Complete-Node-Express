import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/auth/register", formData)
    navigate("/login")
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <input type="text" placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full mb-3 p-2 border rounded" required />
      <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full mb-3 p-2 border rounded" required />
      <input type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} className="w-full mb-3 p-2 border rounded" required />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
    </form>
  )
}
