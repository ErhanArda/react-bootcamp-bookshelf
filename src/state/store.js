import * as reducers from "./ducks"
import {combineReducers, compose, createStore, applyMiddleware } from "redux"
import thunkMiddleWare from "redux-thunk"


const rootReducer = combineReducers(reducers)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunkMiddleWare)))



export default store