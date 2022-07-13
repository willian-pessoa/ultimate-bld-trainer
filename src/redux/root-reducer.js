import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// slices
import edgesReducer from "./edgesSlice/edgesSlice";
import cornersSlice from "./cornersSlice/cornersSlice";

const persistConfig = {
    key: "root",
    storage,
} 

const rootReducer = combineReducers({
    edges: edgesReducer,
    corners: cornersSlice
})

export default persistReducer(persistConfig, rootReducer)