import { createStore } from "redux";
import RootReducer from "../reducers/index";
import InitialState from "./InitialState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(RootReducer, InitialState, composeEnhancers());
// store.subscribe(() => console.log(store.getState()));

export default store;
