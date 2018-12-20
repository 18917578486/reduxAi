import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
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

    if (process.env.NODE_ENV === 'production') {
        return createStore(
            rootReducer,
            compose(
                applyMiddleware(thunk, routerML)
            )
        )
    } else {
        return createStore(
            rootReducer,
            compose(
                applyMiddleware(thunk, routerML),
                window.devToolsExtension ? window.devToolsExtension() : ''
            )
        )
    }
}