import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import LandingPage from './pages/landingPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container' >
        <Home/>
        <LandingPage/>
       </div>
    </>
  )
}

export default App
