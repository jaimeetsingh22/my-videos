// import { Button } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Videos from './Components/Videos'
import Upload from './Components/Upload'
import LogIn from './Components/LogIn'
import Signup from './Components/Signup'
// import ColorModeSwitcher from './ColorModeSwitcher'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/videos' element={ <Videos/> } />
        <Route path='/upload' element={ <Upload/> } />
        <Route path='/login' element={ <LogIn/> } />
        <Route path='/signup' element={ <Signup/> } />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App