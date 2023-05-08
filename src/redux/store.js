


import cartReducer from "./CartReducer";
import productReducer from "./ProductReducer";
import { createStore, combineReducers } from "redux";

// import { devToolsEnhancer } from "@redux-devtools/extension";

const rootReducer = combineReducers({

    products:productReducer,
    cart:cartReducer

});

const store = createStore(rootReducer, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store ;