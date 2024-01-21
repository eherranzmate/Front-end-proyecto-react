import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
// createStore --> es el apodo que le doy a la función legacy_createStore. 
import authReducer from "./reducers/auth.reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    auth: authReducer, 
    
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware (thunk)));
export default store;