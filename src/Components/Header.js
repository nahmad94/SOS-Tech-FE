import React from 'react'
import { HashLink } from 'react-router-hash-link'
import logo from '../imgs/logo-bulb.png'

export default function Header() {
  return (
    <div>
      <nav className='nav'>
        <div>
          <img src={logo} className='logo'/>
        </div>
        <div>
          <h1 className='name'>S.O.S Technologies</h1>
        </div>
        <HashLink smooth to='/#home' className='nav-link'>
          Home
        </HashLink>
        <HashLink smooth to='/#projects' className='nav-link'>
          Projects
        </HashLink>
        <HashLink smooth to='/#about' className='nav-link'>
          About
        </HashLink>
        <HashLink smooth to='/#contact' className='nav-link'>
          Contact 
        </HashLink>
      </nav>
    </div>
  )
}
