import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { getBlog } from '../action/blog';
import { reducers } from './../reducer/reducers';

// const devtools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(
    reducers,
    compose(applyMiddleware(thunk))
)

store.dispatch(getBlog())
