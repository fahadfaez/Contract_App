import React from 'react';
import { connect } from 'react-redux'
import ContractForm from './ContractForm';
import { startEditContract, startRemoveContract } from '../actions/contracts'

export class EditContract extends React.Component {
    onSubmit = (contract) => {
        this.props.startEditContract(this.props.contract.id, contract)
        alert('Updated')
        this.props.history.push('/dashboard')
        
    }
    onRemove = () => {
        this.props.startRemoveContract({ id: this.props.contract.id })
        alert('Contract Deleted')
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Contract</h1>
                    </div>
                </div>    
                    <div className="content-container">   
                        <ContractForm
                        contract ={this.props.contract}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary " onClick={this.onRemove}>Delete Contract</button>
                    </div>
                </div>
         )
    }
}


const mapStateToProps = (state,props)=> ({
    contract : state.contracts.find((contract)=> contract.id === props.match.params.id )
}) 


const mapDispatchToProps = (dispatch, props) => ({
    startEditContract : (id, contract) => dispatch(startEditContract(id, contract)),
    startRemoveContract: (data) => dispatch(startRemoveContract(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditContract)