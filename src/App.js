import React  from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Slider from './components/Slider';
import Navbar from "./components/Navbar";
import Movies from './components/Movies';
import './components/Navbar.css'
import Signin from './components/Signin';
import Signup from './components/Signup';
import BookTicket from './components/BookTicket';
import End from './components/End';


function App() {

  return (
   
    
    <div className="App">

      
      
      <Router>
        
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Slider/>}></Route>
          <Route path='/pocetna' element={<Slider/>}></Route>
          <Route path='/filmovi/*' element={<Movies/>}></Route>
          <Route path='/registracija' element={<Signup/>}></Route>
          <Route path='/rezervacija' element={<BookTicket/>}></Route>
          <Route path='/prijava' element={<Signin/>}></Route>
          <Route path='/karta' element={<End/>}></Route>
        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
