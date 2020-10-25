import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Catalog } from './pages/Catalog'
import { Home } from './pages/Home'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/catalog" exact>
                <Catalog />
            </Route>
        </Switch>
    )
}
 