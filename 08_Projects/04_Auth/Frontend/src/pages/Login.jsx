import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post("http://localhost:5000/api/auth/login", formData)
    localStorage.setItem("token", res.data.token)
    navigate("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full mb-3 p-2 border rounded" required />
      <input type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} className="w-full mb-3 p-2 border rounded" required />
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Login</button>
    </form>
  )
}
