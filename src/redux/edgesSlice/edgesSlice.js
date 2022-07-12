import { createSlice } from '@reduxjs/toolkit'
import { initialState, addPairToQueue, removePairFromArray } from './edgesSlice.utils'
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
    removePairBeforeSleep
} = edgesSlice.actions

export default edgesSlice.reducer