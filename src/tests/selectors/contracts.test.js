import getVisibleContracts from "../../selectors/contracts";
import moment from 'moment'
import contracts from '../fixtures/contracts'



test('Should filter by text value',()=>{
    const filters ={
        text :'ir',
        sortBy : 'date',
        startDate: undefined,
        endDate : undefined
    }
    const result = getVisibleContracts(contracts,filters)
    expect(result).toEqual([ contracts[2], contracts[0]])   
 
})

test('Should filter by start Date',()=>{
    const filters ={
        text :'',
        sortBy : 'date',
        startDate: moment(0),
        endDate : undefined
    }
    const result = getVisibleContracts(contracts,filters)
    expect(result).toEqual([ contracts[2], contracts[0]])   
 
})

test('Should filter by end Date',()=>{
    const filters ={
        text :'',
        sortBy : 'date',
        startDate: undefined,
        endDate : moment(0)
    }
    const result = getVisibleContracts(contracts,filters)
    expect(result).toEqual([ contracts[0], contracts[1]])   
 
})


test('Should Sort By Date (newer to older )',()=>{
    const filters ={
        text :'',
        sortBy : 'date',
        startDate: undefined,
        endDate : undefined
    }
    const result = getVisibleContracts(contracts,filters).sort()
    expect (result).toEqual([contracts[2],contracts[0],contracts[1]])
})


test('Should Sort By Amount ( More to less )',()=>{
    const filters ={
        text :'',
        sortBy : 'amount',
        startDate: undefined,
        endDate : undefined
    }
    const result = getVisibleContracts(contracts,filters).sort()
    expect (result).toEqual([contracts[2],contracts[1],contracts[0]])
})
