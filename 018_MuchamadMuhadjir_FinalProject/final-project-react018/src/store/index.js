import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

const initialState = {
    user: {},
    userOne: {}
}


const reducer = (state = initialState, action) => {
    // console.log(state)
    switch(action.type){
        case 'GET_ALL':
            // console.log(state)
            return { 
                ...state,
                user: action.payload 
            }
        case 'GET_WAN':
            // console.log(state)
            return { 
                ...state,
                userOne:action.payload
            }
        case 'EMPTY_ONE':
            return {
                ...state,
                userOne: {}
            }
        default:
            return state
    }
}

const enhancer = applyMiddleware(thunk)

const store = createStore(reducer, enhancer)

export default store