import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import navReducer from './navReducer';
import thunkMiddleware from "redux-thunk";
import catalogReducer from "./catalogReducer";
import aboutReducer from "./aboutReducer";
import cartReducer from "./cartReducer";
import { loadState, saveState } from './localStorage';



let reducers = combineReducers({
    nav: navReducer,
    catalog: catalogReducer,
    about: aboutReducer,
    cart: cartReducer,
});
const persistedState = loadState();
//const persistedState = localStorage.getItem("cartState") ? JSON.parse(localStorage.getItem("cartState")) : {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, persistedState, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
store.subscribe(() => {
    saveState({
        cartProducts: store.getState().cart.cartProducts
    })
    //localStorage.setItem("cartState", JSON.stringify(store.getState().cart));
});
//console.log(persistedState)

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;
export default store;