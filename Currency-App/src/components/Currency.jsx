import React, { useState } from 'react'  // useState hook'unu ekle

import '../css/Currency.css'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Currency() {

    const[amount, setAmount] = useState(0);
    const[fromCurrency, setFromCurrency] = useState('USD');
    const[toCurrency, setToCurrency] = useState('TL');
    const[result, setResult] = useState(0);

    const exchange = () => {
        console.log(amount)
        console.log(fromCurrency)
    } 

  return (
    <div className='currency-div'>
        <div style={{ fontFamily: 'Arial', backgroundColor: 'black', color: 'white', width: '100%', textAlign: 'center' }}>
            <h3>DOVİZ KURU UYGULAMASI</h3>
        </div>
        
        <div style={{marginTop: '25px'}}>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount' />
            <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TL">TL</option>
                <option value="JPY">JPY</option>
                <option value="CAD">CAD</option>
                <option value="AUD">AUD</option>
                <option value="CNY">CNY</option>
            </select>

            <FaRegArrowAltCircleRight style={{fontSize: '25px', marginRight: '10px', marginTop: '10px'}} />

            <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TL">TL</option>
                <option value="JPY">JPY</option>
                <option value="CAD">CAD</option>
                <option value="AUD">AUD</option>
                <option value="CNY">CNY</option>
            </select>

            <input value={value} onChange={(e) => setResult(e.target.value)} type="number" className='result' />
        </div>
        <div style={{marginTop: '13px'}}>
            <button onClick={exchange} className='exchange-button'>Çevir</button>
        </div>
    </div>
  )
}

export default Currency
