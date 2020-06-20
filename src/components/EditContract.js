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
                <ContractForm
                    contract ={this.props.contract}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Delete Contract</button>

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