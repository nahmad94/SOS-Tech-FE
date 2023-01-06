import React from 'react'
import webDevPic from '../imgs/Web-Development.jpeg'
import Carousel from './Carousel/Carousel';
import CarouselItem from './Carousel/CarouselItem';

export default function Project() {
  return (
    <div>
        <div className='service-container'>
            <div className='img-container'>
                <img src={webDevPic} className='service-pic'/>
            </div>
            <div className='services'>
                <h1>Website Design</h1>
                <div className='service-blurb'>Need a website that's not only visually appealing, but also user-friendly and optimized for search engines? Look no further! Our team of experienced web designers is here to help. We'll work with you to understand your business goals and create a custom website that perfectly showcases your brand and meets the needs of your target audience. Whether you're starting from scratch or looking to update an existing site, we've got you covered. Contact us today to learn more and get started on your new website!</div>
            </div>
        </div>
        <div className='service-container'>
            <div className='img-container'>
                <img src={webDevPic} className='service-pic'/>
            </div>
            <div className='services'>
                <h1>Custom solutions</h1>
                <div className='service-blurb'>Are you tired of cookie-cutter web solutions that don't quite fit your needs? Look no further! Our team of experienced web developers specializes in creating custom web solutions tailored to your specific business needs. We'll work with you to understand your unique challenges and goals, and develop a customized solution that fits your budget and timeline. From custom web applications and integrations to personalized website design and development, we've got you covered. Contact us today to learn more and start realizing the full potential of the web for your business.</div>
            </div>
        </div>
        <div className='service-container'>
            <div className='img-container'>
                <img src={webDevPic} className='service-pic'/>
            </div>
            <div className='services'>
                <h1>Product Management Systems</h1>
                <div className='service-blurb'>Efficiently managing your product line is key to driving sales and growth. Our product management system helps you streamline your processes, reduce errors, and make data-driven decisions. With features like inventory tracking, order management, and product analytics, you'll have all the tools you need to keep your product line running smoothly. Our system is easy to use, flexible, and scalable, making it the perfect solution for businesses of any size. Contact us today to learn more and take control of your product management.</div>
            </div>
        </div>
        <div className='service-container'>
            <div className='img-container'>
                <img src={webDevPic} className='service-pic'/>
            </div>
            <div className='services'>
                <h1>Integration Services</h1>
                <div className='service-blurb'>Are you struggling to get all of your business's tech systems to work together seamlessly? Our tech integration services can help. We specialize in connecting different technologies and platforms, so you can enjoy the benefits of an integrated tech stack without the headache. Whether you're looking to integrate your CRM with your marketing automation tool or your e-commerce platform with your shipping software, we've got you covered. Contact us today to learn more and start leveraging the power of tech integration for your business.</div>
            </div>
        </div>
        <div className='service-container'>
            <div className='img-container'>
                <img src={webDevPic} className='service-pic'/>
            </div>
            <div className='services'>
                <h1>IT Help Desk</h1>
                <div className='service-blurb'>Downtime and technical issues can be a major disruption for your business. That's where our IT help desk comes in. Our team of experienced technicians is available to troubleshoot and resolve any IT issues you may be experiencing. Whether you need assistance with a hardware issue, a software problem, or anything in between, we've got you covered. Our help desk is available 24/7, so you can get the support you need, whenever you need it. Contact us today to learn more and get the peace of mind that comes with knowing your IT is in good hands.</div>
            </div>
        </div>
    </div>
  )
}
