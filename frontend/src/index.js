import React from 'React'
import ReactDom from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import AuthOrApp from './main/authOrApp'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDom.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>, 
    document.getElementById('app')
)

serviceWorker.unregister();
