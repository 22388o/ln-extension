import {
    select,
    takeEvery
} from "redux-saga/effects";
import {
    BrowserHeaders,
    Code,
    grpc
} from "grpc-web-client";
import {
    BalanceHistory,
    Exchange
} from "../lib/rpc_pb_service";
import { BalanceQueryResponse, BalanceQueryRequest } from "../lib/rpc_pb";

const getNode = state => state.app.get('node');

/**
 * Get user balance
 * @param action
 */


function* fetchUserBalance(action) {
    const node = yield select(getNode);

    const getBalanceRequest = new BalanceQueryRequest();
    getBalanceRequest.setUserId(1);

    grpc.unary(Exchange.BalanceQuery, {
        request: getBalanceRequest,
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
function* sendPayment(action) {

}

/**
 * Get unique link from server and redirect to link
 * @param action
 */
function* finishPayment(action) {

}

/**
 * Get invoice from server for payment
 * @param action
 */
function* payContent(action) {

}

/**
 *
 * @param action
 */
function* createAddress(action) {

}

export default function* lnHandlers() {
    yield takeEvery("GET_USER_BALANCE", fetchUserBalance);
    yield takeEvery("CREATE_ADDRESS", createAddress);
    yield takeEvery("PAY_CONTENT", payContent);
    yield takeEvery("SEND_PAYMENT", sendPayment);
    yield takeEvery("FIHISH_PAYMENT", finishPayment);
}