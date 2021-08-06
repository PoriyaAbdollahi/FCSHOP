import React from 'react'
import { Row , Col , Image ,ListGroup , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import products from '../products'
const Product = ({match}) => {

const product =    products.find((item)=>{
      return item._id === match.params.id
   })
   return (
      <div>
       <Link to="/" className="btn btn-light my-3">لینک بازگشت به صفحه اصلی</Link>
       
       <Row>
          <Col md={6}>
             <Image src={product.image} fluid/>
          </Col>
         
          <Col md={3}>
          <ListGroup variant="flush">
          <ListGroup.Item>
                <h3>{product.name}</h3>
             </ListGroup.Item>
          <ListGroup.Item>
                <h3>{product.price}</h3>
             </ListGroup.Item>
             <ListGroup.Item>
                <h3>{product.description}</h3>
             </ListGroup.Item>
          </ListGroup>
          </Col>
          <Col md={3}>
             <ListGroup variant="flush">
                <ListGroup.Item>
                   <Button className="btn-block" type="button"> افزودن به سبد خرید</Button>
                </ListGroup.Item>
             </ListGroup>
          </Col>
       </Row>
      </div>
   )
   
}

export default Product
