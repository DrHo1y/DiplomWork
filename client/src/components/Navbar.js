import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Icon, Row, Col } from 'react-materialize'

export const NavBar = () => {
    return (
        <Row>
            <Col
                s={10}
                offset='s1'
            >
                <Navbar
                    alignLinks="left"
                    centerChildren
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
                    
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/catalog">Каталог</NavLink>
                   
                </Navbar>
            </Col>
        </Row>
    )
}