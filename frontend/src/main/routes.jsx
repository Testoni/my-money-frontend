import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import Dashboard2 from '../dashboard2/dashboard2' // no redux
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>

    /* OLD
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>*/
)