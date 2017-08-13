import { createStore , applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import AppSagas from './sagas';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';
import { wrapStore } from 'react-chrome-redux';
import { watchPaymentHeaders } from 'Actions';

//Set up logger for Immutable
const logger = createLogger({
    stateTransformer: (state) => {
        let newState = {};

        for (var i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
                newState[i] = state[i].toJS();
            } else {
                newState[i] = state[i];
            }
        };
        return newState;
    }
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
        logger
    )
);

sagaMiddleware.run(AppSagas);

wrapStore(store, {
    portName: 'ln'
});

store.dispatch(watchPaymentHeaders());

export default store;