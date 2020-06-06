import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import ContractsDashboard from '../components/ContractsDashboard'
import AddContract from '../components/AddContract'
import EditContract from '../components/EditContract'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={ContractsDashboard} exact={true}/>
        <Route path="/create" component={AddContract} />
        <Route path="/edit/:id" component={EditContract} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
        </Switch>
    </div>
</BrowserRouter>
)

export default AppRouter