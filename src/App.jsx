import React from 'react'
import Navbar from './components/Navbar';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Product from './pages/Product';
import BestSelling from './pages/BestSelling';
import Footer from './components/Footer';

const App=()=>{
  return(
    <div className="min-h-screen flex flex-col">
    <Router>
      <Navbar/>
      {/* <div className='flex grow'> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about/bestselling' element={<BestSelling/>}/>
      
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<Product/>}/>
       
      </Routes>
      {/* </div> */}
      <Footer/>
      
    </Router>
    </div>
  )
  
}

export default App;