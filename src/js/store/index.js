import {createStore, applyMiddleware, compose} from "redux";
import { forbiddenWordsMiddleware } from "../middleware";
import rootReducer from "../reducers/index";
import apiSaga from "../sagas/api-saga";
//import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer,  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)));
initialiseSagaMiddleware.run(apiSaga);
export default store;