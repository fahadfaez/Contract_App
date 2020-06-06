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

const jsx = (
  <Provider store ={store}>
     <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

