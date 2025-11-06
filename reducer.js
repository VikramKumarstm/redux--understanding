function numberReducer(incomingObject, action) {
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

    } else if(action.type === 'INCREMENT') {
        // we don't need payload for increment // action: {type: 'INCREMENT', payload: null}

        return {
            ...incomingObject,
            number: incomingObject.number + 1
        }

    } else if(action.type === 'DECREMENT') {
        // we don't need payload for decrement

        return {
            ...incomingObject,
            number: incomingObject - 1
        }

    } else {

        return incomingObject;

    }
}

const init = { number : 5 }

console.log(numberReducer(init, {type: 'ADD', payload: 45})); // {number: 1}