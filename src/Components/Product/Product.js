import React from 'react'
import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'
const Product = ({ product }) => {
   
    const noUnderline = {
      textDecoration: "none"
    }
   return (
      <Card className="my-3 p-3 rounded">
         <Link style={noUnderline} to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top"/>
         </Link>
         <Card.Body>
            <Link style={noUnderline} to={`/product/${product._id}`}>
              <Card.Title as="div" >{product.name}</Card.Title>
            </Link>
         </Card.Body>
      <Card.Text as="h3">{product.price+'$'}</Card.Text>
      </Card>
   )
}

export default Product
