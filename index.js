import { createStore, combineReducers } from "redux";

const initialState = {
    number : 0,
    anotherNumber: 0
}

function numberReducer(incomingObject=initialState.number, action) {
    if(action.type === 'ADD') {

        const numberToAdd = action.payload;

        return {
            ...incomingObject,
            number: incomingObject.number + numberToAdd
        }

    } else if(action.type === 'SUBTRACT') {

        const numberToSubtract = action.payload;

        return {
            ...incomingObject,
            number: incomingObject.number - numberToSubtract
        }

    } else {

        return incomingObject;

    }
}

function anotherNumberReducer(incomingObject=initialState.anotherNumber, action) {
    if(action.type === 'INCREMENT') {
        // we don't need payload for increment // action: {type: 'INCREMENT', payload: null}

        return {
            ...incomingObject,
            anotherNumber: incomingObject.anotherNumber + 1
        }

    } else if(action.type === 'DECREMENT') {
        // we don't need payload for decrement

        return {
            ...incomingObject,
            anotherNumber: incomingObject.anotherNumber - 1
        }

    } else {
        return incomingObject
    }
}

const rootReducer = combineReducers({
    number: numberReducer,
    anotherNumber: anotherNumberReducer
})

const store = createStore(rootReducer)

console.log(store) //{number : 0}
console.log(store.getState()); //{number : 0}

store.dispatch({type: 'ADD', payload: 17}) // dispatch takes an action
store.dispatch({type: 'INCREMENT', payload: null})
console.log(store.getState()) // {number: 17}