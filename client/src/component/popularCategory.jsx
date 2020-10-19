import React from 'react'
import {Slider} from './slider'
export const PopularCategory = () => {
    return (
        <div className="pop-category">
            <div className="pop-category__wrapper">
                <div className="pop-category__main">
                    <Slider/>
                </div>
                <div className="pop-category__minor">Lorem ipsum dolor sit amet.</div>
                <div className="pop-category__minor">Lorem ipsum dolor sit amet.</div>
                <div className="pop-category__minor">Lorem ipsum dolor sit amet.</div>
                <div className="pop-category__minor">Lorem ipsum dolor sit amet.</div>
            </div>
        </div>
    )
}