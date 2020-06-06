import { createStore, combineReducers} from 'redux'
import contractsReducer from '../reducers/contracts'
import filtersReducer from '../reducers/filters'

export default ()=>{
    // Creating app store
    const store = createStore(
        combineReducers({
           contracts : contractsReducer,
           filters : filtersReducer 
        }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
return store
}

