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
export const { updateQueue, createCommsPairs, removePair } = edgesSlice.actions

export default edgesSlice.reducer