/**
 * Redux Store
 *
 * Single source of state for entire app.
 * Remove the DEVTOOLS hook in production.
 *
 * @format
 * @flow
 */

import { createStore, compose } from 'redux';
import RootReducer from '../reducers/index';
import InitialState from './InitialState';

// TODO: remove outside of dev!!
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(RootReducer, InitialState, composeEnhancers());
// store.subscribe(() => console.log(store.getState()));

export default store;
