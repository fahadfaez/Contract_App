import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addContract, editContract} from './actions/contracts'
import {setTextFilter} from './actions/filters'
import getVisibleContracts from './selectors/contracts'
import { Provider} from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore()

store.dispatch(addContract({name: '1- first contract',amount : 700, date : 1}));
store.dispatch(addContract({name: '2- second contract',amount : 1000, date : 2}));
store.dispatch(addContract({name: '3- Third contract',amount : 500, date : 3}));

const state = store.getState()
const visibleContracts = getVisibleContracts(state.contracts ,state.filters)
console.log(visibleContracts)



const jsx = (
  <Provider store ={store}>
     <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

