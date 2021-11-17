import { createStore,combineReducers ,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import {reportsReducer,socialReducer,editReportReducer} from '../reducers';
import {createWrapper} from 'next-redux-wrapper';


export const rootReducers= combineReducers({
    reports:reportsReducer,
    socials:socialReducer,
    editReport:editReportReducer,
})

// let composeEnhancers = compose;
// if (typeof window !== 'undefined') {
//      composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
// }

const ReduxThunk=applyMiddleware(thunk);

const makeStore= ()=> createStore(rootReducers,ReduxThunk)
// const store = createStore(rootReducers,ReduxThunk);

export const wrapper = createWrapper(makeStore);
// export default store;