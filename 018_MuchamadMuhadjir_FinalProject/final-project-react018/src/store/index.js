import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

const initialState = {
    user: {}
}


const reducer = (state = initialState, action) => {
    // console.log(state)
    switch(action.type){
        case 'GET_ALL':
            console.log(state)
            return { user: action.payload }
        default:
            return state
    }
}

const enhancer = applyMiddleware(thunk)

const store = createStore(reducer, enhancer)

export default store