import { createCommsState } from "../../utils/createCommsState"

const letterScheme = "ABCDEFGJKLMNOPQRSTUVWX"
const { allPairsToChoice, allPairsStatus } = createCommsState(letterScheme);

export const initialState = {
    letterScheme: letterScheme.split(""),
    allPairsStatus,
    allPairsToChoice,
    queue: new Array(20).fill(""),
}

//FUNCTIONS
// receive a queue, a pair and a position
// insert the pair in the position after remove the first element from the queue
export function addPairToQueue(queue, pair, position) {
    let tempQueue = [...queue];
    tempQueue.shift();
    tempQueue.splice(position, 0, pair)
    return tempQueue
}

// receive a array and pair
// remove this pair from array
export function removePairFromArray(array, pair) {
    let arrayPairRemoved = [...array]
    arrayPairRemoved.splice(array.find(item => item === pair), 1);
    return arrayPairRemoved
}