import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import getVisibleContracts from '../selectors/contracts'
import selectContractsTotal from '../selectors/contracts-total'

export const ContractsSummary = ({contractsCount, contractsTotal}) => {
    const contractWord = contractsCount === 1 ? 'contract' : 'contracts'
    const formatedContractsTotal = numeral(contractsTotal).format('0,0[.]00 $')
    return (
        <div className="page-header">
            <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{contractsCount} </span> {contractWord} totalling <span>{formatedContractsTotal}</span> </h1>
            <div className="page-header__actions">
                <Link className ="button" to='/create'>Add Contract</Link>
            </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleContracts = getVisibleContracts(state.contracts,state.filters)

    return {
        contractsCount : visibleContracts.length,
        contractsTotal : selectContractsTotal(visibleContracts)
    }
}

export default connect(mapStateToProps)(ContractsSummary)