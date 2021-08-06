import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product/Product'
import products from '../products'

const Home = () => {
   return (
      <div>
      <h1>محصولات</h1> 
      <Row>
         {products.map((item)=>{

            return( 
            <Col key={item._id} sm = {12} md ={6} lg={4} >
            <Product product={item}/>
            </Col> 
            )

         })}
         </Row>        
      </div>
   )
}

export default Home
