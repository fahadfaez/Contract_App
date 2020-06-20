// This file is for the actions generators for the contracts
import { v4 as uuidv4 } from 'uuid'
import database from '../firebase/firebase'

// Function to Add Contract
export const addContract = (contract)=>({
type : 'ADD_CONTRACT',
contract
})


export const startAddContract = (contractData = {}) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        const {
            name ='',
            date= 0,
            amount=0,
            received=0,
            left=0
        } = contractData

        const contract = {name, date,amount,received,left}
        database.ref(`users/${uid}/contracts`).push(contract).then((ref) => {
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

export const startRemoveContract = ({id}={}) => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/contracts/${id}`).remove().then(()=>{
            dispatch(removeContract({id}))
        })
    }
    
}

// Editing a contract

export const editContract = (id,updates)=> ({
type: 'EDIT_CONTRACT',
id,
updates
})

// Create startEditContract Function

export const startEditContract = (id,updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/contracts/${id}`).update(updates).then(()=>{
            dispatch(editContract(id, updates))
        })
    }
}


// SET_CONTRACTS
export const setContracts = (contracts) => ({
    type : 'SET_CONTRACTS',
    contracts
})


export const startSetContracts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/contracts`).once('value').then((snapshot)=>{
            const contracts =[]
            
            snapshot.forEach((childSnapshot)=> {
                contracts.push({
                    id : childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setContracts(contracts))
        })
    }
}