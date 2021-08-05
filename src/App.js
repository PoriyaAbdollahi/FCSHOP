import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './pages/Home'
export default function App() {
   return (
      <div>
         <Header/>
         <main >
         <Container>
           
           <Home/>
          </Container>
         </main>
     
         <Footer/>
      </div>
   )
}
