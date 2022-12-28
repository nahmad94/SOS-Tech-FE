import React from "react";

const CarouselItem = ({children, width}) => {
    return (
        <div className="item" style={{width: width}}>
            {children}
        </div>
    )
}

export default CarouselItem