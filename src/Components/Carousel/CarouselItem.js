import React from "react";
import './Carousel.css';

const CarouselItem = ({children, width}) => {
    return (
        <div className="item" style={{width: width}}>
            {children}
        </div>
    )
}

export default CarouselItem