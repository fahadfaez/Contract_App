import React from 'react';
import ContractList from './ContractsList'
import ContractsListFilters from './ContractsListFilters'


const ContractsDashboard = ()=> (
    <div>
        <ContractsListFilters />
        <ContractList />
    </div>
)


export default ContractsDashboard