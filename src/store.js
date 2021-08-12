import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer , productDetailReducer } from "./Reducers/productReducer";
import { cartReducer } from "./Reducers/cartReducer";
const reducer = combineReducers({
   productList : productListReducer ,
   productDetail :productDetailReducer,
   cart:cartReducer
})

const cartItemsFromsLocalStorage = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems')) : []
 
const initialState =  {
   cart:{ cartItems:cartItemsFromsLocalStorage}
}

const middleware =  [thunk]

 const store = createStore(reducer , initialState,applyMiddleware(...middleware))

 export default store