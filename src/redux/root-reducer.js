import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// slices
import edgesReducer from "./edgesSlice/edgesSlice";

const persistConfig = {
    key: "root",
    storage,
} 

const rootReducer = combineReducers({
    edges: edgesReducer
})

export default persistReducer(persistConfig, rootReducer)