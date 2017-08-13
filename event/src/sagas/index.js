import { fork } from 'redux-saga/effects';
import lnHandlers from './ln';
import watchers from './watchers';

export default function* run(){
    yield [
        fork(lnHandlers),
        fork(watchers)
    ];
}