import React from 'react';
import { connect } from 'react-redux'
import ContractForm from './ContractForm';
import { editContract, removeContract } from '../actions/contracts'



const EditContract = (props)=> {
    console.log(props)
    
    return (
            <div>
                <ContractForm
                contract={props.contract}
                onSubmit={(contract)=>{
                props.dispatch(editContract(props.contract.id, contract))
                alert('Updated')
                props.history.push('/')    
                }}
                />
                <button onClick = { ()=>{
                props.dispatch(removeContract({id : props.contract.id}))
                alert('Contract Deleted')
                props.history.push('/')  
                }}>Delete Contract</button>
            </div>
       
    )
}
const mapStateToProps = (state,props)=> {
    return {
        contract : state.contracts.find((contract)=> contract.id === props.match.params.id )
    } 
    
}


export default connect(mapStateToProps)(EditContract)