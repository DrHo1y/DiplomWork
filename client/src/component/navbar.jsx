import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav__container">
                <div className="nav__container-left">
                    <div className="nav__item active"><NavLink to="/">Главная</NavLink></div>
                    <div className="nav__item"><NavLink to="/catalog">Каталог</NavLink></div>
                    <div className="nav__item"><NavLink to="/about">О магазине</NavLink></div>
                    <div className="nav__item"><NavLink to="/repair">Ремонт</NavLink></div>
                    <div className="nav__item"><NavLink to="/delivery">Доставка</NavLink></div>
                </div>
                <div className="nav__container-right">
                    <div className="nav__item"><NavLink to="/cart">Корзина</NavLink></div>
                </div>
            </div>
        </div>
    )
}