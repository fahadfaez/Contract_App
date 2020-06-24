import React from 'react'
import { connect } from 'react-redux'
import ContractListItem from './ContractsListItem'
import getVisibleContracts from '../selectors/contracts'


const ContractList = (props)=> (
    <div className='content-container'>
        <div className="list-header">
            <div className="show-for-mobile">Contracts</div>
            <div className="show-for-desktop">Contract</div>
            <div className="show-for-desktop">Contract Value</div>
        </div>
        <div className="list-body">
        {
            props.contracts.length === 0 ? (
                <div className="list-item--message">
                    <span>No Contracts</span>
                </div>
                
            ) : (
                props.contracts.map((contract) => {
                    return <ContractListItem key={contract.id} {...contract} />
                })
            )}

        </div>
        
        </div>

)

const mapStateToPropes = (state)=> {
    return {
        contracts : getVisibleContracts(state.contracts,state.filters)
    }
}

export default connect(mapStateToPropes)(ContractList)


