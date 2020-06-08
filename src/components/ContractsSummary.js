import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getVisibleContracts from '../selectors/contracts'
import selectContractsTotal from '../selectors/contracts-total'

export const ContractsSummary = ({contractsCount, contractsTotal}) => {
    const contractWord = contractsCount === 1 ? 'contract' : 'contracts'
    const formatedContractsTotal = numeral(contractsTotal).format('0,0[.]00 $')
    return (
        <div>
            <h1>Viewing {contractsCount} {contractWord} totalling {formatedContractsTotal} </h1>
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