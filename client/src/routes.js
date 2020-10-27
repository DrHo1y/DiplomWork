import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { About } from './pages/about/About'
import { Catalog } from './pages/Catalog'
import { Home } from './pages/home/Home'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/catalog" exact>
                <Catalog />
            </Route>
            <Route path="/about" exact>
                <About />
            </Route>
        </Switch>
    )
}
 