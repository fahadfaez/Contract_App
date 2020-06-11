// create contracts Reducer

const contractsReducerDefaultState = []

const contractsReducer = (state = contractsReducerDefaultState , action)=> {
    switch (action.type) {
        case 'ADD_CONTRACT' :
            return [
                ...state,
                action.contract
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

export default contractsReducer