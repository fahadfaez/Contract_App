// This file is for the actions generators for the contracts
import { v4 as uuidv4 } from 'uuid'
import database from '../firebase/firebase'

// Function to Add Contract
export const addContract = (contract)=>({
type : 'ADD_CONTRACT',
contract
})


export const startAddContract = (contractData = {}) => {
    return (dispatch) => {
        const {
            name ='',
            date= 0,
            amount=0,
            received=0,
            left=0
        } = contractData

        const contract = {name, date,amount,received,left}
        database.ref('Contracts').push(contract).then((ref) => {
            dispatch(addContract({
                id: ref.key,
                ...contract
            }))
        })
    }
}


// Function to Remove Contract

export const removeContract = ({id}={})=> ({
type : 'REMOVE_CONTRACT',
id
})

// Editing a contract

export const editContract = (id,updates)=> ({
type: 'EDIT_CONTRACT',
id,
updates
})