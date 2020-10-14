import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Icon } from 'react-materialize'

export const NavBar = () => {
    return (
        <Navbar
            alignLinks="right"
            brand={<a href="/">Logo</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <li><NavLink to="/main">Главная</NavLink></li>
            <li><NavLink to="/create">Создать</NavLink></li>
            <li><NavLink to="/links">Ссылки</NavLink></li>
        </Navbar>
    )
}