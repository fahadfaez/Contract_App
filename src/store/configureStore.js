import { createStore, combineReducers, applyMiddleware} from 'redux'
import contractsReducer from '../reducers/contracts'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

export default ()=>{
    // Creating app store
    const store = createStore(
        combineReducers({
           contracts : contractsReducer,
           filters : filtersReducer 
        }),
        applyMiddleware(thunk)
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
return store
}

