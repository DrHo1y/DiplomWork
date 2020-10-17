import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { AddCategory } from './pages/AddCategory'
import { Catalog } from './pages/Catalog'
import { Home } from './pages/Home'

export const UseRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/catalog' exact>
                <Catalog />
            </Route>
            <Route path='/catalog/add' exact>
                <AddCategory />
            </Route>
        </Switch>
    )
}