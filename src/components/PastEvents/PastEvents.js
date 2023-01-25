import React, {useState} from "react";
import './PastEvents.css';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

const PastEvents = ({slides}) => {
    const length = slides.length
    const [current, setCurrent] = useState(0)
    const [x, setX] = useState(100);
    const nextSlide = () => {
        x === -100*(length-2) ? setX(100) : setX(x-100)
        setCurrent(current === length-1 ? 0 : current+1)
    }
    
    const prevSlide = () => {
        x === 100 ? setX(-100*(length-2)) : setX(x+100)
        setCurrent(current === 0 ? length-1 : current-1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    
    
    return(
        <div>
            <div className="carousel large-window">
                <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
                <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
                {slides.map((slide,index) => {
                    return(
                        <div className="slide-item" style={{transform:`translateX(${x}%)`}} >
                            <img className={current === index ? 'slide-main event-img' : 'slide-preview event-img' } src={slide} alt="content"/>
                        </div>
                    )
                })}
            </div>
            <div className="carousel small-window">
                <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
                <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
                {slides.map((slide, index) => {
                    return (
                        <div className="slide" key={index} style={{transform:`translateX(${x-100}%)`}}>
                            <div className="event">
                                <img src={slide} alt="content" className="event-img"/>
                            </div>
                        </div>
                    )
                })} 
            </div>
            
        </div>
        
    );
}

export default PastEvents