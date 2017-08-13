import { takeEvery } from 'redux-saga/effects';
import store from 'Store';
import { setPage } from 'Actions';


function* watchPaymentHeader(action){
    chrome.webRequest.onHeadersReceived.addListener(function(details){
            details.responseHeaders.forEach(function(v,i,a){
                if(v.name == "X-Payment-Page" && v.value == "true"){
                    store.dispatch(setPage('payment'));
                }
            });
        },
        {urls: ["http://*/*"]},
        ["responseHeaders"]
    );
}

export default function* watchers(){
    yield takeEvery("WATCH_PAYMENT_HEADER", watchPaymentHeader);
}