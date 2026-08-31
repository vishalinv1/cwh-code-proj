import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Harry")
  const [form, setform] = useState({ email: "", phone: "" })

  const handleClick = () => {
    alert("i am clicked")
  }

  const MouseOver = () => {
    alert("i am mouse over")
  }

  const HandleChange1 = (e) => {
    setName(e.target.value)
  }

  const HandleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={MouseOver}>
        I am a red div
      </div> */}

      <input type="text" value={name} onChange={HandleChange1} />
      <input type="text" name='email' value={form.email} onChange={HandleChange} />
      <input type="text" name='phone' value={form.phone} onChange={HandleChange} />
    </>
  )
}

export default App
