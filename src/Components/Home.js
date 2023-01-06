import React from 'react'
import logo from '../imgs/logo-bulb.png'

export default function Home() {

  return (
    <div className='welcome'>
        <h1>Welcome to <span className='name'>S.O.S Technologies</span></h1>
        <img src={logo} className='home-logo' />
        <div className='welcome-blurb'>We're a team of passionate technologists dedicated to helping businesses solve their toughest tech challenges. Whether you need a new website, a custom software solution, or expert IT support, we've got you covered.</div>
        <div className='welcome-blurb'>Our mission is simple: to provide reliable and innovative tech solutions that help our customers succeed. We believe that by empowering businesses with the right tools and support, we can help them achieve their goals and thrive in today's competitive landscape.</div>
        <div className='welcome-blurb'>Thank you for choosing SOS Tech. We look forward to working with you and being a trusted partner in your success.</div>
        <div className='welcome-blurb'>Sincerely,</div>
        <div className='welcome-closing'>The S.O.S Tech Team</div>
    </div>
  )
}
