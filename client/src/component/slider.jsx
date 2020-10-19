import React from 'react'

export const Slider = () => {
    
    return (
        <div className="wrapper">
            <input type="radio" name="point" id="slide1" />
            <input type="radio" name="point" id="slide2" />
            <input type="radio" name="point" id="slide3" />
            <input type="radio" name="point" id="slide4" />
            <div className="slider">
                <div className="slider__page slide1"></div>
                <div className="slider__page slide2"></div>
                <div className="slider__page slide3"></div>
                <div className="slider__page slide4"></div>
            </div>
            <div className="controls">
                <label htmlFor="slide1"></label>
                <label htmlFor="slide2"></label>
                <label htmlFor="slide3"></label>
                <label htmlFor="slide4"></label>
            </div>
        </div>
    )
}   