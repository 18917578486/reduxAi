import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerReducer, push, routerMiddleware} from 'react-router-redux'

function r1 (prevState, action) {
    return 5;
} 

function r2 (prevState, action) {
    return 6;
}

const rootReducer = combineReducers({
    r1, r2,
    router: routerReducer
});

const history = createHistory();

const routerML = routerMiddleware(history);

const store = createStore(rootReducer, applyMiddleware(thunk, routerML));

export default class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>react</div>
        )
    }
}
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);


