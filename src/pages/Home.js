import React, {   useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product/Product'


import { productAction } from '../actions/productAction'
const Home = () => {
const  dispatch = useDispatch()

 const productList = useSelector(state => state.productList)

 const {loading , products } = productList

useEffect(() => {

dispatch(productAction())


}, [dispatch])

   return (
      <div>
      <h1>محصولات</h1> 
      {loading ? ( <h2>درحال دریافت محصولات ... </h2> ): 
      (
         <Row>
         {products.map((item)=>{

            return( 
            <Col key={item._id} sm = {12} md ={6} lg={4} >
            <Product product={item}/>
            </Col> 
            )

         })}
         </Row>      
      )

      }
      
      </div>
   )
}

export default Home
