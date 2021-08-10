import axios from 'axios'
import React,{ useEffect , useState} from 'react'
import { Row , Col , Image ,ListGroup , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
 import products from '../products'
const Product = ({match}) => {
const [product,setProduct] = useState({})
useEffect(() => {
   const sendRequest = async () => {
      const response =  await axios.get(`http://localhost:8000/api/products/${match.params.id}`)

      setProduct(response.data)
   }
   sendRequest()
},[match]  )

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
