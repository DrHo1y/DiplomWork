import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav__container-left">
                <NavLink to="/"><div className="nav__item">Главная</div></NavLink>
                <NavLink to="/catalog"><div className="nav__item">Каталог</div></NavLink>
                <NavLink to="/about"><div className="nav__item">О магазине</div></NavLink>
                <NavLink to="/repair"><div className="nav__item">Ремонт</div></NavLink>
                <NavLink to="/delivery"><div className="nav__item">Доставка</div></NavLink>
            </div>
            <div className="nav__container-right">
                <NavLink to="/cart"><div className="nav__item">Корзина</div></NavLink>
            </div>
        </div>
    )
}