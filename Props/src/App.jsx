import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container';

function App() {

  return (
    <div>
      {/* <Product productName="Ayakkabi" price={3200} />
      <hr />
      <Product productName="Pantolon" price={950} />
      <hr />
      <Product productName={productName} price={15000} /> */}

      {/* Component içinde component tanımlama */}
      <Container>
        <Product productName="Telefon" price={9600} />
      </Container>
    </div>
  )
}

export default App
