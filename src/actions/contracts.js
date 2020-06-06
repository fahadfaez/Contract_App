// This file is for the actions generators for the contracts
import uuid from 'uuid'

// Function to Add Contract
export const addContract = ({
    name ='',
    date= undefined,
    amount=0,
    received=[],
    left=0
}={})=>({
type : 'ADD_CONTRACT',
contracts:{
    id: uuid() ,
    name,
    date,
    amount,
    received,
    left
}
})

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