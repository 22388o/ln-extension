export function setPage(namePage){
    return {
        type: 'SET_PAGE',
        page: namePage
    }
}

export function getUserBalance(){
    return {
        type: 'GET_USER_BALANCE'
    }
}

export function payContent(){
    return {
        type: 'PAY_CONTENT'
    }
}

export function createAddress(){
    return {
        type: 'CREATE_ADDRESS'
    }
}