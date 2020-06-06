import contractsReducer from '../../reducers/contracts'
import contracts from '../fixtures/contracts'


test('Should Set the default state',()=>{
const result = contractsReducer(undefined,{type:'@@INIT'})
expect(result).toEqual([])

})

test('Should Remove Contract by id',()=>{
    const action = {
        type: 'REMOVE_CONTRACT',
        id : contracts[1].id
    }
const result = contractsReducer(contracts,action)
expect(result).toEqual([contracts[0],contracts[2]])

})

test('Should Not Remove Contract by id if not found',()=>{
    const action = {
        type: 'REMOVE_CONTRACT',
        id : '-1'
    }
const result = contractsReducer(contracts,action)
expect(result).toEqual(contracts)

})

test('Should Add a Contract',()=>{
    const action = {
        type: 'ADD_CONTRACT',
        contracts:{
            id:'4',
            name:'Fourth contract',
            date : '5',
            amount : 40,
            received : [],
            left : 0 
        }
    }
const result = contractsReducer(contracts,action)
expect(result).toEqual([
    ...contracts,
    action.contracts
])

})


test('Should Edit Contract by id',()=>{
    const name = 'Updated Name'
    const action = {
        type: 'EDIT_CONTRACT',
        id : contracts[1].id,
        updates :{
            name
        }

    }
const result = contractsReducer(contracts,action)
expect(result[1].name).toBe(name)

})


test('Should Not Edit Contract by id if its not found',()=>{
    const name = 'Updated Name'
    const action = {
        type: 'EDIT_CONTRACT',
        id : '-1',
        updates :{
            name
        }

    }
const result = contractsReducer(contracts,action)
expect(result).toEqual(contracts)

})