import axios from "axios";
import products from "../products";
export const addTocart = (id) => async(dispatch,getState) => {
  // const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)
  let product = products.find((product)=>{
   return product._id == id
})
   dispatch({
      type : 'CART_ADD_ITEM',
      payload : {
         product: product._id,
         name:product.name,
         image:product.image,
         price:product.price,
      }
   })
   localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
 }
 export const removeFromCart = (id) => (dispatch,getState) => {
    dispatch({
       type :'CART_REMOVE_ITEM',
       payload:id
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
 }