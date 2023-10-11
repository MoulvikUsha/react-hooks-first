// import { legacy_createStore as createStore } from 'redux';

const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// const initialState = {
//     noOfCakes: 10,
//     noOfIcecreams: 20
// }
const initialCakeState = {
    noOfCakes: 10
}
const initialIcecreamState = {
    noOfIcecreams: 20
}

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}
// (previousState and action) => newState
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 noOfCakes: state.noOfCakes - 1
//             }
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 noOfIcecreams: state.noOfIcecreams - 1
//             }
//         default:
//             return state;
//     }
// }
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1
            }
        default:
            return state;
    }
}
const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIcecreams: state.noOfIcecreams - 1
            }
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer)
console.log('Initail State:', store.getState());
const unsubscribe = store.subscribe(() => console.log(`Updated State ${JSON.stringify(store.getState())}`))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe()