import React from 'react'
import Navbar from './components/Navbar';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Product from './pages/Product';

const App=()=>{
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<Product/>}/>
       
      </Routes>
    </Router>
  )
  
}

export default App;