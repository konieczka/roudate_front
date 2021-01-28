import { combineReducers } from "redux";
import currentUser from "./currentUser";
import matchedUser from "./matchedUser";
import chat from "./chat";

const rootReducer = combineReducers({ currentUser, matchedUser, chat });

export default rootReducer;
