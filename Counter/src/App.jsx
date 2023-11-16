import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  const addvalue = ()=>
  {
    setCounter(counter+1)      
  }
  const removeValue=()=>
  {    
    setCounter(counter-1);    
  }
  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button
        onClick={addvalue}
      >increase</button>
      <button
        onClick={removeValue}
      >decrease</button>
      <footer>Value Updated to : {counter}</footer>
    </>
  )
}

export default App
