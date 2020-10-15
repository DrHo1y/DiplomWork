import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Catalog } from './pages/Catalog'

export const UseRoutes = () => {
    return (
        <Switch>
            <Route path='/category' exact>
                <Catalog/>
            </Route>
            <Redirect to='/category' />
        </Switch>
    )
}