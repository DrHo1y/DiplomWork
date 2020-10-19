import React from 'react'

export const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav__container">
                <div className="nav__container-left">
                    <div className="nav__item active">Главная</div>
                    <div className="nav__item">Каталог</div>
                    <div className="nav__item">О магазине</div>
                    <div className="nav__item">Ремонт</div>
                    <div className="nav__item">Доставка</div>
                </div>
                <div className="nav__container-right">
                    <div className="nav__item">Корзина</div>
                </div>
            </div>
        </div>
    )
}