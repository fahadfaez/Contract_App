import React from 'react'
import { connect } from 'react-redux'
import ContractListItem from './ContractsListItem'
import getVisibleContracts from '../selectors/contracts'


const ContractList = (props)=> (
    <div>
        <h1>Contracts Lists</h1>
        {props.contracts.map((contract)=>{
            return <ContractListItem key={contract.id} {...contract} />
            
        })}
                
    </div>

)

const mapStateToPropes = (state)=> {
    return {
        contracts : getVisibleContracts(state.contracts,state.filters)
    }
}

export default connect(mapStateToPropes)(ContractList)


