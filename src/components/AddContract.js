import React from 'react';
import ContractForm from './ContractForm';
import { connect } from 'react-redux'
import { addContract } from '../actions/contracts';


const AddContract = (props)=> (
    <div>
       <h3>Contracts Form</h3>
        <ContractForm 
          onSubmit ={(contract)=>{
            props.dispatch(addContract(contract))
            alert('Contract is Submitted')
            props.history.push('/')
          }}
        
        />
        </div>
)


export default connect()(AddContract)