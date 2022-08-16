import React from 'react'
import './App.css'
import Service from './components/service/Service'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Navbar from './components/nav/Navbar'
import Product from './components/products/Product'
import Quote from './components/quote/Quote'
import Career from './components/career/Career'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



const App = () => {
  return (
    <div className='App'>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />}/>
          <Route path="/services" element={<Service />} />
          <Route path="/career" element={<Career />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        <Footer />
      </Router>
      
      
    </div>
   
      
     
  
  )
}

export default App
