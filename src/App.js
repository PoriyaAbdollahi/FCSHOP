import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './pages/Home'
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import Product from './pages/Product'
import Cart from './pages/Cart'
export default function App() {
   return (
      <Router>
         <Header/>
         <main >
               <Container>
                          <Route path="/" exact component={Home}/>
                          <Route path="/product/:id" component={Product}/>
                          <Route path="/Cart/:id?" component={Cart}/>
              </Container>
         </main>
         <Footer/>
      </Router>
   )
}
