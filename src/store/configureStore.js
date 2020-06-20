import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import contractsReducer from '../reducers/contracts'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    // Creating app store
    const store = createStore(
        combineReducers({
           contracts : contractsReducer,
           filters : filtersReducer,
           auth : authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        
    )
return store
}

