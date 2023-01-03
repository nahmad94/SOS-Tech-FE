import React from 'react'
import Carousel from './Carousel/Carousel';
import CarouselItem from './Carousel/CarouselItem';


export default function Project() {
  return (
    <div>
        <Carousel className='carousel'>
        <CarouselItem className='carousel'>
          <div style={{backgroundImage: 'url(/img/Web-Development.jpeg', backgroundRepeat: 'no-repeat', backgroundSize:'contains', height:'70vh', width:'100vh', alignContent: 'center' }}>
          <h1>Website Design</h1>
          <p>Web design and </p>
          </div>
        </CarouselItem>
        <CarouselItem>Custom solutions</CarouselItem>
        <CarouselItem>Product Management Systems</CarouselItem>
        <CarouselItem>Integration Services</CarouselItem>
        <CarouselItem>IT Help Desk</CarouselItem>
      </Carousel>
    </div>
  )
}
