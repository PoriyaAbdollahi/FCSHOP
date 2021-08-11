import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row , Col , Image ,ListGroup , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { productDetailAction } from '../actions/productAction'


const Product = ({match}) => {

const dispatch = useDispatch()

const  productDetail = useSelector(state => state.productDetail)

const { loading , product } = productDetail

useEffect(() => {
  dispatch(productDetailAction(match.params.id))
},[dispatch ,match]  )


   return (
      <div>
       <Link to="/" className="btn btn-light my-3">لینک بازگشت به صفحه اصلی</Link>
       {loading ? (<h2>درحال دریافت ا</h2>) : (  <Row>
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
       </Row>) }
     
      </div>
   )
   
}

export default Product
