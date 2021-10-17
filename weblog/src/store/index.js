import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { getBlog } from '../action/blog';
import { reducers } from './../reducer/reducers';

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

store.dispatch(getBlog())

store.subscribe(() => console.log(store.getState()))