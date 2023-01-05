import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import logo from '../imgs/logo.jpeg'

export default function Header() {
  return (
    <div>
      <nav className='nav'>
        <NavHashLink to='/#About'>
          Link to About
        </NavHashLink>
        <div>
          <img src={logo} className='logo'/>
          <h1 className='name'>S.O.S Technologies</h1>
        </div>
        <a className='nav-link'>About Us</a>
        <a className='nav-link'>Projects</a>
        <a className='nav-link'>Contact</a>
        <a className='nav-link'>Careers</a>
      </nav>
    </div>
  )
}
