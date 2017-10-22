import { Map } from 'immutable';

const initialState = Map({
    page: 'main',
    address: null,
    node: {
        host: 'http://46.101.172.135',
        port: '19999'
    }
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return state.set('page', action.page);
        case 'SET_ADDRESS':
            return state.set('address', action.address);
        case 'SET_NODE_HOST':
            return state.setIn(['node', 'host'], action.host);
        case 'SET_NODE_PORT':
            return state.setIn(['node', 'port'], action.port);
        default:
            return state;
    }
};
