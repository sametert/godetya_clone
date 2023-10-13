import React from 'react'
import '../styles/Navbar.css'
import Logo from '../images/Logo_3.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-content'>
            <div>
                <Link to="/">
                  <img src={Logo} alt="logo"  width={342} height={107}/>
                </Link>
            </div>
            <div className='navbar-links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar