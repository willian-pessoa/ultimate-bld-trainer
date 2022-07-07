import { configureStore } from '@reduxjs/toolkit'
import edgesReducer from "./edgesSlice/edgesSlice"

export default configureStore({
  reducer: {
    edges: edgesReducer
  },
})