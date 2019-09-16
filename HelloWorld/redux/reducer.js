
const initialState = {
    message : 'initial state'
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_MESSAGE': 
            return {message: action.payload}
        default: 
            return state;
    }
}