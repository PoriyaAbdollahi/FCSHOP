export const cartReducer = (state={cartItems : []},action) => {

switch(action.type){

   case 'CART_ADD_ITEM' :
      const item = action.payload

      const existingItem = state.cartItems.find( (i) => i.product === item.product )

      if(existingItem){
         return {
            ...state,
            cartItems:state.cartItems.map((i) =>i.product === existingItem.product ? item : i 
            )
         }
      }
      else{
         return {
            ...state,
            cartItems:[...state.cartItems,item]
         }
         
      }
      default :return state

}
}