import React from 'react'
import logo from '../imgs/logo.jpeg'

export default function Home() {

  return (
    <div className='welcome'>
        <h1>Welcome to S.O.S Technologies!</h1>
        <div>We're a team of passionate technologists dedicated to helping businesses solve their toughest tech challenges. Whether you need a new website, a custom software solution, or expert IT support, we've got you covered.</div>
        <div>Our mission is simple: to provide reliable and innovative tech solutions that help our customers succeed. We believe that by empowering businesses with the right tools and support, we can help them achieve their goals and thrive in today's competitive landscape.</div>
        <div>Thank you for choosing SOS Tech. We look forward to working with you and being a trusted partner in your success.</div>
        <div>Sincerely,<br /><img src={logo} className='home-logo'></img>The SOS Tech Team</div>
        {/* <img src={logo} className='home-logo'></img> */}
    </div>
  )
}
