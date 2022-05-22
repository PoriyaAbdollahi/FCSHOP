import axios from "axios";
import products from "../products"
export const productAction = () =>  async (dispatch) => {
try{
   dispatch({ type: 'PRODUCT_LIST_REQUEST' })
 
//const { data } = await axios.get("http://localhost:8000/api/products")
   
   dispatch({
      type: 'PRODUCT_LIST_SUCCESS',
      payload:products
   })
} catch(error){
   console.log(error)

}
}


export const productDetailAction = (id) =>  async (dispatch) => {
   try{
      dispatch({ type: 'PRODUCT_DETAIL_REQUEST' })
      let product = products.find((product)=>{
         return product._id == id
      })
      //const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)
      // data = products.find
      dispatch({
         type: 'PRODUCT_DETAIL_SUCCESS',
         payload:product
      })
   } catch(error){
      console.log(error)
   
   }
   }