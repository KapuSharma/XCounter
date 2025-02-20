
import { use, useState } from 'react'
import './App.css'

function App() {
  const [valueOfCount, setValueOfCount] = useState(0);

  const Increment = () => {
    setValueOfCount(valueOfCount + 1);
  }

  const Decrement = () => {
    setValueOfCount(valueOfCount - 1);
  }

  return(
    <>
    <h1>Counter App</h1>
    <h2>Count: {valueOfCount}</h2>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App
