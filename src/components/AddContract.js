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
        <div className="page-header">
          <div className="content-container">
             <h1 className="page-header__title">Contracts Form</h1>
          </div>
         </div>
      <div className="content-container">
          <ContractForm
          onSubmit={this.onSubmit}
      />
      </div>
      
       </div>
    )
  }

}


const mapDispatchToProps = (dispatch) => ({
  startAddContract : (contract) => dispatch(startAddContract(contract))
})


export default connect(undefined,mapDispatchToProps)(AddContract)