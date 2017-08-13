import {takeEvery, put, select} from "redux-saga/effects";
import {grpc, Code} from "grpc-web-client";
import {Lightning} from "Lib/rpc_pb_service";
import {NewAddressRequest, WalletBalanceRequest, SendRequest} from "Lib/rpc_pb";
import store from "Store";
import lnService from "Services/ln-service-singlton";

const getNode = state => state.app.get('node');

/**
 * Get user balance
 * @param action
 */
function* fetchUserBalance(action){
    const node = yield select(getNode);
    const getWalletBalanceRequest = new WalletBalanceRequest();
    grpc.unary(Lightning.WalletBalance, {
        request: getWalletBalanceRequest,
        host: node.host + ':' + node.port,
        onEnd: res => {
            const { status, statusMessage, headers, message, trailers } = res;
            if (status === Code.OK && message) {
                console.log(message.toObject());
            }
        }
    });
}

/**
 * Send payment by Invoice
 * @param action
 */
function* sendPayment(action){
    const node = yield select(getNode);
    let sendRequest = new SendRequest();
    sendRequest.setPaymentRequest(action.payment_request);
    grpc.unary(Lightning.SendPaymentSync, {
        request: sendRequest,
        host: node.host + ':' + node.port,
        onEnd: res => {
            const { status, statusMessage, headers, message, trailers } = res;
            if (status === Code.OK && message) {
                store.dispatch({
                    type: 'FIHISH_PAYMENT',
                    r_hash: action.r_hash
                });
            }
        }
    });
}

/**
 * Get unique link from server and redirect to link
 * @param action
 */
function* finishPayment(action){
    let invoice = yield lnService.checkInvoice(action.r_hash);
    console.log(invoice);
}

/**
 * Get invoice from server for payment
 * @param action
 */
function* payContent(action){
    lnService.init('http://localhost:8060');
    let invoice = yield lnService.createInvoice();
    console.log(invoice);
    yield put({
        type: 'SEND_PAYMENT',
        payment_request: invoice.paymentRequest,
        r_hash: invoice.rHash
    });
}

/**
 *
 * @param action
 */
function* createAddress(action) {
    const node = yield select(getNode);
    const getNewAdressRequest = new NewAddressRequest();
    grpc.unary(Lightning.NewAddress, {
        request: getNewAdressRequest,
        host: node.host + ':' + node.port,
        onEnd: res => {
            const { status, statusMessage, headers, message, trailers } = res;
            if (status === Code.OK && message) {
                console.log(message.toObject());
                store.dispatch({
                    type: 'SET_ADDRESS',
                    address: message.toObject().address
                });
                store.dispatch({
                    type: 'SET_PAGE',
                    page: 'showAddress'
                });
            }
        }
    });
}

export default function* lnHandlers(){
    yield takeEvery("GET_USER_BALANCE", fetchUserBalance);
    yield takeEvery("CREATE_ADDRESS", createAddress);
    yield takeEvery("PAY_CONTENT", payContent);
    yield takeEvery("SEND_PAYMENT", sendPayment);
    yield takeEvery("FIHISH_PAYMENT", finishPayment);
}