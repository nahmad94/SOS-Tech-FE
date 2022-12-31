import React from 'react'
import './Carousel.css';
import {useState, useEffect} from 'react'

const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [pause, setPause] = useState(false)
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) {
                updateIndex(activeIndex + 1)
            }
        }, 1000)
        return () => {
            if(interval) {
                clearInterval(interval)
            }
        }
    })
    return (
        <div className='carousel' onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
            <div className='inner' style={{transform : `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: '100%'})
                })}
            </div>
            <div className='signal'>
                <button onClick={() => {updateIndex(activeIndex - 1)}}>Previous</button>
                {React.Children.map(children, (child, index) => {
                    return(
                        <button className={`${index === activeIndex ? 'active' : ''}`} onClick={() => {updateIndex(index)}}>
                            {index + 1}
                        </button>
                    )
                })}
                <button onClick={() => {updateIndex(activeIndex + 1)}}>Next</button>
            </div>
        </div>
    )
}

export default Carousel