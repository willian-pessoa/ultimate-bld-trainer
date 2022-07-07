import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './edgesSlice.utils'
import { createCommsState } from '../../utils/createCommsState'

export const edgesSlice = createSlice({
    name: 'edges',
    initialState,
    reducers: {
        updateQueue: state => {
            state.queue.unshift().push("")
        },
        createCommsPairs: state => {
            return{
                ...state,
                allPairs: createCommsState(state.letterScheme),
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { updateQueue, createCommsPairs } = edgesSlice.actions

export default edgesSlice.reducer