import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import {startSetContracts} from './actions/contracts'
import { login, logout } from './actions/auth'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase'

const store = configureStore()


const jsx = (
  <Provider store ={store}>
     <AppRouter />
  </Provider>
)

let hasRenderd = false
const renderApp = () => {
  if (!hasRenderd) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRenderd = true
  }
}


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid))
    store.dispatch(startSetContracts()).then(()=> {
      renderApp()
      
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
      
    })

    console.log(user)
    console.log('Log In')
  } else {
    store.dispatch(logout())
    console.log('logout')
    renderApp()
    history.push('/')
     
  }

})
