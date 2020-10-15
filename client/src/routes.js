import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Catalog } from './pages/Catalog'

export const UseRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <Catalog/>
            </Route>
        </Switch>
    )
}