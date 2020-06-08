import React from 'react';
import ContractList from './ContractsList'
import ContractsListFilters from './ContractsListFilters'
import ContractsSummary from './ContractsSummary'


const ContractsDashboard = ()=> (
    <div>
        <ContractsSummary />
        <ContractsListFilters />
        <ContractList />
    </div>
)


export default ContractsDashboard