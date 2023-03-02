import React,{useState} from 'react';
import logo from './images/logoB 1.png';
import{FaBars, FaTimes} from 'react-icons/fa'; 
import './Navbar.css'



const Navbar=()=>{

    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)


    return(
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo'/>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={80} style={{color:'#ffffff'}}/>)
                    :(<FaBars size={30} style={{color:'#ffffff'}} />)}
                    
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='/pocetna'>Početna</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/filmovi'>U kinu</a>
                    </li>     
                    <li className='nav-item'>
                        <a href='/registracija'>Novi korisnik</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/prijava'>Prijava</a>
                    </li>                    
                    
                </ul>
            </nav>

           
            
        </div>
    )
}
export default Navbar




