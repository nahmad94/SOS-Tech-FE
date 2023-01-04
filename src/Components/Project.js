import React from 'react'
import Carousel from './Carousel/Carousel';
import CarouselItem from './Carousel/CarouselItem';

export default function Project() {
  return (
    <div>
        <Carousel className='carousel'>
            <CarouselItem className='carousel'>
                <div style={{backgroundImage: 'url(/img/Web-Development.jpeg', backgroundRepeat: 'no-repeat', backgroundSize:'center', height:'70vh', width:'100%', alignContent: 'center' }}>
                    <h1>Website Design</h1>
                    <p>Website and grapical design services </p>
                    <div>Need a website that's not only visually appealing, but also user-friendly and optimized for search engines? Look no further! Our team of experienced web designers is here to help. We'll work with you to understand your business goals and create a custom website that perfectly showcases your brand and meets the needs of your target audience. Whether you're starting from scratch or looking to update an existing site, we've got you covered. Contact us today to learn more and get started on your new website!</div>
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
