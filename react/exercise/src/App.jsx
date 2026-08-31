import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        {cards.map((card) => {
          return <div key={card.id} className="card">
            <span>By UserId:{card.userId}</span><hr></hr>
            <span>By id:{card.id}</span><hr></hr>
            <span><h1>{card.title}</h1><hr></hr></span>
            <span><h1>{card.body}</h1></span>
          </div>
        })}
      </div>

    </>
  )
}

export default App
