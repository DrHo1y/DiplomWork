import React from 'react'

export const GroupOfGoods = (props) => {
    return (
        <div className="product">
            <div className="product__wrapper">
            <div className="product__item-title">{props.title}</div>
                {props.items.map((item) => {
                    return (
                    <div className="product__item" key={item}>{item}</div>
                    )
                })}
            </div>
        </div>
    )
}