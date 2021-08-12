import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart } from '../actions/cartAction'

const Cart = ({match}) => {
const productId = match.params.id

const dispatch = useDispatch()

const cart = useSelector((state) => state.cart)
const {cartItems} = cart

console.log(cartItems)

   useEffect(() => {

      if(productId){
         dispatch(addTocart(productId))
      }

   }, [dispatch , productId])
   return (
      <div>
         سبد خرید 
      </div>
   )
}

export default Cart
