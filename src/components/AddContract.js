import React from 'react';
import ContractForm from './ContractForm';
import { connect } from 'react-redux'
import { startAddContract } from '../actions/contracts';

export class AddContract extends React.Component {
  onSubmit = (contract) => {
    this.props.startAddContract(contract)
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div>
      <h3>Contracts Form</h3>
       <ContractForm
          onSubmit={this.onSubmit}
       />
       </div>
    )
  }

}


const mapDispatchToProps = (dispatch) => ({
  startAddContract : (contract) => dispatch(startAddContract(contract))
})


export default connect(undefined,mapDispatchToProps)(AddContract)