import React from 'react'
import './App.css'
// import Perfume from './Pages/Perfume'
import Home from './Pages/Home'
import ScrollVideo from './Pages/ScrollVideo'
import Products from './Pages/Products'
import EndingVideo from './Pages/EndingVideo'
import SecondProduct from './Pages/SecondProduct'
import ThirdProduct from './Pages/ThirdProduct'
import VideoScroll from './Pages/VideoScroll'

function App() {
 

  return (
    <>
     {/* <Perfume/> */}
     <Home/>
     <ScrollVideo/>
     {/* <VideoScroll/> */}
     <Products/>
     <SecondProduct/>
     <ThirdProduct/>
     <EndingVideo/>
    </>
  )
}

export default App
