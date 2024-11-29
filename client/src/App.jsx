import React from 'react'
import './App.css'
// import Perfume from './Pages/Perfume'
import Home from './Pages/Home'
import ScrollVideo from './Pages/ScrollVideo'
import Products from './Pages/Products'
import EndingVideo from './Pages/EndingVideo'
import SecondProduct from './Pages/SecondProduct'
import ThirdProduct from './Pages/ThirdProduct'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
     {/* <Perfume/> */}
     <Navbar />
     <Home/>
     <ScrollVideo/>
     <Products/>
     <SecondProduct/>
     <ThirdProduct/>
     <EndingVideo/>
     <Footer/>
    </>
  )
}

export default App
