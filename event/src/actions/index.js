export function watchPaymentHeaders(){
    return {
        type: 'WATCH_PAYMENT_HEADER'
    }
}

export function setPage(namePage){
    return {
        type: 'SET_PAGE',
        page: namePage
    }
}