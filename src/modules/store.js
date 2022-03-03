import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter/counter";

// 리듀서가 여러개일 때 묶을려고 씀
const rootReducer = combineReducers({
  counter: counterReducer,
});

// 스토어 생성, 리듀서 연결
export const store = createStore(rootReducer);
