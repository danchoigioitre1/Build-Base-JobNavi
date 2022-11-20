import changeLanguagesReducer from "./changeLanguagesReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    changeLanguagesReducer:changeLanguagesReducer
});

export default rootReducer;