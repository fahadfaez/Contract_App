import { createStore, combineReducers} from 'redux'
import uuid from 'uuid'

// Function to Add Contract
const addContract = ({
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

const removeContract = ({id}={})=> ({
    type : 'REMOVE_CONTRACT',
    id
})

// Editing a contract

const editContract = (id,updates)=> ({
    type: 'EDIT_CONTRACT',
    id,
    updates
})

// Function to set text filter

const setTextFilter = (text = '')=> ({
    type : 'SET_TEXT_FILTER',
    text
})

// Funtion to Sort By Amount

const sortByAmount =()=>({
    type : 'SORT_BY_AMOUNT'
})

const sortByDate =()=>({
    type : 'SORT_BY_DATE'
})

const setStartDate = (startDate)=> ({
    type :'SET_START_DATE',
    startDate,
})

const setEndDate = (endDate)=> ({
    type :'SET_END_DATE',
    endDate
})
// create contracts Reducer

const contractsReducerDefaultState = []

const contractsReducer = (state = contractsReducerDefaultState , action)=> {
    switch (action.type) {
        case 'ADD_CONTRACT' :
            return [
                ...state,
                action.contracts
            ]
        case 'REMOVE_CONTRACT':
            return state.filter(({id})=> id !== action.id)
        case 'EDIT_CONTRACT':
            return state.map((contract)=>{
                if (contract.id === action.id) {
                    return {
                        ...contract,
                        ...action.updates
                    }
                }else {
                    return contract
                }
            })
        default :
            return state
    }
}

// create Filters Reducer
const filtersReducerDefaultState = {
    text :'',
    sortBy : 'date',
    startDate: undefined,
    endDate :undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                text : action.text
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy : 'amount'

            }
        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy : 'date'

            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate : action.startDate

            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate : action.endDate
                
            }       
        default :
            return state
    }
}

const getVisibleContracts = (contracts , {text, sortBy, startDate, endDate})=>{
    return contracts.filter((contract)=>{
        const startDateMatch = typeof startDate !== 'number' || contract.date >= startDate
        const endDateMatch = typeof endDate !== 'number' || contract.date <= endDate
        const textMatch = contract.name.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch

    }).sort((a, b)=>{
        if (sortBy === 'date'){
            return a.date < b.date ? 1 : -1
        }
    })
}


// Creating app store
const store = createStore(
    combineReducers({
       contracts : contractsReducer,
       filters : filtersReducer 
    })
)

store.subscribe(()=>{
    const state = store.getState()
    const visibleContracts = getVisibleContracts(state.contracts,state.filters)
    console.log(visibleContracts)
})


// creating adding contract dispatch

const contractOne = store.dispatch(addContract({name:'first project',amount :1000 , date : -21000}))
const contractTwo = store.dispatch(addContract({name:'second project',amount :2000, date : -1000}))

// store.dispatch(removeContract({id : contractOne.contracts.id }))

store.dispatch(editContract(contractTwo.contracts.id,{name:'edited',date:'newdate',amount:'editedamount',}))

//store.dispatch(setTextFilter(''))

//store.dispatch(sortByAmount())
//store.dispatch(sortByDate())

//store.dispatch(setStartDate(120))
//store.dispatch(setStartDate())
//store.dispatch(setEndDate(1250))



// here we create our data needs to be monitored 

/* const appData = {
    contracts : [{
        id : 'dasdsad',
        name : 'TEST CONTRACT',
        date : undefined,
        amount :0,
        received : [],
        left : 0 
    }],
    filters : {
        text :'text filter',
        sortBy : 'date',
        startDate: undefined,
        endDate :undefined
    }
}
 */
