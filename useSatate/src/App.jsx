import { useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('Yusuf'); // count is the state variable and setCount is the function that updates the state variable
  const [lastName, setLastName] = useState('Aytaş');

  const handleClick = () => {
    setFirstName("Mustafa");
    setLastName("Aslan");
  }

  return (
    <div>
      <div>{firstName} {lastName}</div>
      <div><button onClick={() => {setFirstName("Mustafa"), setLastName("Aslan")}}>Değiştir</button></div>
      <div><button onClick={handleClick}>Değiştir</button></div>
    </div>
  )
}

export default App
