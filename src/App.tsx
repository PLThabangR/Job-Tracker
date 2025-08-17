import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './pages/home/Home'
import LandingPage from './pages/landingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Page404 from './pages/page404/Page404';
import RegisterForm from './pages/form/RegisterForm'
import LoginForm from './pages/form/LoginForm'

function App() {
 

  return (
    <>
      <div className='container'>
        

        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
           <Route path='/login' element={<LoginForm/>}/>
          
          <Route path='/*' element={<Page404/>}/>

         
        </Routes>
        <Toaster/>
       </div>
    </>
  )
}

export default App
