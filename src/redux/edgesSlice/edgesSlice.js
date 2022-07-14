import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './edgesSlice.utils'
import { addPairToQueue, removePairFromArray } from '../../utils/sliceHelpers'
import { createCommsState } from '../../utils/createCommsState'

export const edgesSlice = createSlice({
    name: 'edges',
    initialState,
    reducers: {
        removePair: (state, action) => {
            return {
                ...state,
                allPairsToChoice: removePairFromArray(state.allPairsToChoice, action.payload)
            }
        },
        updateQueue: (state, action) => {
            return {
                ...state,
                queue: addPairToQueue(state.queue, action.payload.pair, action.payload.position)
            }
        },
        updateAllPairsStatus: (state, action) => {
            return {
                ...state,
                allPairsStatus: { ...state.allPairsStatus, [action.payload.pair]: { reviewed: true, times: action.payload.times } }
            }
        },
        addPairReviewBeforeSleep: (state, action) => {
            return {
                ...state,
                reviewBeforeSleep: [...state.reviewBeforeSleep, action.payload]
            }
        },
        removePairBeforeSleep: (state, action) => {
            return {
                ...state,
                reviewBeforeSleep: removePairFromArray(state.reviewBeforeSleep, action.payload)
            }
        },
        createCommsPairs: (state, action) => {
            const { allPairsToChoice, allPairsStatus } = createCommsState(action.payload);
            return {
                ...state,
                allPairsStatus,
                allPairsToChoice,
                reviewBeforeSleep: [],
                queue: new Array(20).fill(""),
            }
        },
        updateLetterScheme: (state, action) => {
            return {
                ...state,
                letterScheme: action.payload.split("")
            }
        },
        shiftQueue: state => {
            let tempArr = [...state.queue];
            tempArr.shift();
            return{
                ...state,
                queue: tempArr
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    updateQueue,
    createCommsPairs,
    removePair,
    updateAllPairsStatus,
    addPairReviewBeforeSleep,
    removePairBeforeSleep,
    updateLetterScheme,
    shiftQueue
} = edgesSlice.actions

export default edgesSlice.reducer