import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './pages/Home'
import { BrowserRouter as Router ,Route } from 'react-router-dom'
export default function App() {
   return (
      <Router>
         <Header/>
         <main >
                <Container>
                          <Route path="/" exact component={Home}/>
              </Container>
         </main>
         <Footer/>
      </Router>
   )
}
