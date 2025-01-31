import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  useEffect(() => {
    console.log('her zaman çalışır')
  })

  useEffect(() => {
    console.log('sadece bir kere çalışır')
    //Veri tabanından ürünleri getir ve listeleme işlemleri yap mantığında kullanabiliriz.
  }, [])

  useEffect(() => {
    console.log('ilk render edildiğinde ve firstName state değeri değiştiğinde çalışır.')
  }, [firstName])

  useEffect(() => {
    console.log('ilk render edildiğinde ve lastName state değeri değiştiğinde çalışır.')
  } , [lastName])

  useEffect(() => {
    console.log('ilk render edildiğinde fistName ve lastName state değerleri beraber değiştiğinde çalışır.')
  } , [firstName, lastName])

  return (
    <div>
      <div><button onClick={() => {setFirstName("Yusuf"), setLastName("Aytaş")}}>Adı Değiştir</button></div>
    </div>
  )
}

export default App
