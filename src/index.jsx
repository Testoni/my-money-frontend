import react from 'React'
import ReactDom from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'

import reducers from './main/reducers'
import App from './main/app'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENION__()
const store = applyMiddleware(promise)(createStore)(reducers, devTools)
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
)