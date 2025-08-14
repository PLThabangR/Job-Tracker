import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import LandingPage from './pages/landingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Page404 from './pages/page404/page404'

function App() {
 

  return (
    <>
      <div className='container'>
        

        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          
          <Route path='/*' element={<Page404/>}/>

         
        </Routes>
       </div>
    </>
  )
}

export default App
