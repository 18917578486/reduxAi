import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerReducer, push, routerMiddleware} from 'react-router-redux'

import 'style/main.scss';
import S from './style.scss';
import 'semantic-ui-css/semantic.min.css';

import PhotoGallery from 'photoGallery/PhotoGallery';
import ToolBox from 'toolBox/ToolBox';
import Board from 'drawingBoard/Board';
import LayerManager from 'layerManager/LayerManager';


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
            <div className={S.gridWrap}>
                <div className={S.topRow}>

                    <div className={S.logo}>
                        <div className={S.imgWrap}>
                            <a><img src={require('img/logo.png')} alt=''></img></a>
                        </div>
                    </div>

                    <div className={S.gallery}>
                        <PhotoGallery />
                    </div>
                </div>
                <div className={S.bottomRow}>
                    <div className={S.tool}>
                        <ToolBox />
                    </div>
                    <div className={S.board}>
                        <Board />
                        <LayerManager />
                    </div>
                </div>
            </div>
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


