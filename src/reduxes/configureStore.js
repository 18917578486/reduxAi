import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'

import reducers from './reducer'
const history = createHistory();

const routerML = routerMiddleware(createHistory);

export {history};

let rootReducer = combineReducers({
    ...reducers,
    router: routerReducer
});

export default function configureStore () {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, routerML)
    )
}