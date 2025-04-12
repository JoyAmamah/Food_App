import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Menu from './pages/Menu/Menu';

function App() {

  return (
    <>

    <Router>
    <div className='w-full min-h-screen bg-neutral-100/50 text-neutral-500 flex-col'>
      
      {/* NavBar */}
      <Navbar />

      {/* Routing */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/menu' element={<Menu />} />
      </Routes>

      {/* Footer */}
      <Footer />
      
    </div>
    </Router>
    </>
  )
}

export default App;
