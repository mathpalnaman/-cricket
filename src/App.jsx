import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to XYZ Cricket Organization</h1>
        <p>Join the ultimate cricket experience!</p>
        <button className="cta-button">View Upcoming Tournaments</button>
      </section>
    </div>
  )
}

export default App
