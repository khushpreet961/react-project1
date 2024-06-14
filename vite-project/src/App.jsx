import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slidebar from './components/Sidebar'
// import Card from './components/Card'
import Card1 from './components/Card1'
import Contact from './components/Contact'

function App() {


  return (
    <>
    <Navbar/>
    <Slidebar/>
    <Contact/>
    {/* <Card/> */}
    <Card1/>
    
    </>
  )
}

export default App
