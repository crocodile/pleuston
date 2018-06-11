import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { createBrowserHistory } from 'history'
// import { BrowserRouter as Router } from 'react-router-dom'
import {
    ConnectedRouter as Router,
    connectRouter,
    routerMiddleware
} from 'connected-react-router'

import appReducer from './reducers'
import { getAccounts } from './actions/index'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

const history = createBrowserHistory()

const store = createStore(
    connectRouter(history)(appReducer),
    composeWithDevTools(
        applyMiddleware(thunk),
        applyMiddleware(routerMiddleware(history))
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()


function boot() {
    store.dispatch(getAccounts())
}
/* Das */boot()
