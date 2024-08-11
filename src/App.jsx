//import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  

  return (
    <>
     <Router>
     <Navbar/>
       <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/dietplan" element={<Home/>}/>
       <Route exact path="/blogs" element={<Home/>}/>
      </Routes>
     </Router>
     <Footer/>
    </>
  )
}

export default App
