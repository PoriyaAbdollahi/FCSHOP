import React from 'react'
import { Container , Row, Col } from 'react-bootstrap'
import './Footer.css'
const Footer = () => {
   
   return (
      <footer>
         <Container  >
            <Row>
            <Col className="text-center" variant='lights'>
               <p>
               مارو در شبکه های اجتماعی زیر دنبال کنید
               </p>
            </Col>
            
            </Row>
            <Row>
            <Col className="text-center" >
            <i className="fa fa-instagram fa-2x fa-border white-color"></i>
            <i className="fa fa-twitter fa-2x fa-border white-color"></i>
            <i className="fa fa-github  fa-2x  fa-border white-color"></i>

            </Col>
            </Row>
            <Row>
               <Col className="text-center" >
               <p className="copyright">
               Copyright 1999-2021 by Refsnes Data
               </p>
               </Col>
            </Row>
         </Container>
      </footer>
   )
}

export default Footer
