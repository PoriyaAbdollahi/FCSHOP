import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
export default function App() {
   return (
      <div>
         <Header/>
         <main >
         <Container>
           <h3>FC project</h3>
          </Container>
         </main>
     
         <Footer/>
      </div>
   )
}
