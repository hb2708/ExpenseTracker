import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import {rootSaga} from '../saga/expensesSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export default store;
