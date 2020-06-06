import { addContract, editContract, removeContract} from '../../actions/contracts'

test('should setup remove contract action object', ()=> {
    const action =removeContract({id:'123abc'})
    expect(action).toEqual({
        type: 'REMOVE_CONTRACT',
        id: '123abc'
    })
})

test('Should setup edit contract action object',()=>{
    const action = editContract('123',{name: 'new',amount:10})
    expect(action).toEqual({
        type:'EDIT_CONTRACT',
        id:'123',
        updates: {
            name : 'new',
            amount : 10
        }
    })
})

test('Should setup add contract object with provided values',()=>{
    const contractData = {
        name : 'contract test',
        date : 1000,
        amount :50,
        received : [],
        left : 0
    }
    const action = addContract(contractData)
    expect(action).toEqual({
        type: 'ADD_CONTRACT',
        contracts: {
            ...contractData,
            id: expect.any(String)
        }
    })
})

test('Should setup add contract object with default values',()=>{
    const action=addContract()
    expect(action).toEqual({
        type: 'ADD_CONTRACT',
        contracts:{
            id: expect.any(String),
            name:'',
            date: undefined,
            amount:0,
            received:[],
            left:0
        }
    })
})
