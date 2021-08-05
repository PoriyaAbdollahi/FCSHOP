import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'

const Home = () => {
   return (
      <div>
      <h1>محصولات</h1> 
      <Row>
         {products.map((item)=>{

            return <Col sm = {12} md ={6} lg={4} > <h3>{item.name}</h3></Col>

         })}
         </Row>        
      </div>
   )
}

export default Home
