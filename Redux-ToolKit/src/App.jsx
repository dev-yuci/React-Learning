import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  
  const state = useSelector((store) => store.counter);
  console.log(state);

  return (
    <div>
      Yusuf
    </div>
  )
}

export default App
