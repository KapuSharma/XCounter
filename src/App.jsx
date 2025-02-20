
import { use, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  }

  const Decrement = () => {
    setCount(count - 1);
  }

  return(
    <>
    <h1>Counter App</h1>
    <h2>Counter: {count}</h2>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App
