import React from 'react';
import { Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ContractsDashboard from '../components/ContractsDashboard'
import AddContract from '../components/AddContract'
import EditContract from '../components/EditContract'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ContractsDashboard} exact={true}/>
        <PrivateRoute path="/create" component={AddContract} />
        <PrivateRoute path="/edit/:id" component={EditContract} />
        <Route component={NotFoundPage} />
        </Switch>
    </div>
</Router>
)

export default AppRouter