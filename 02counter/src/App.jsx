import { useState } from "react"
import './App.css'



function App() {

  const [count, setCount] = useState(5)

  if (count > 20 || count < 0) {
    setCount(0)
  }
  


  return (
   <>
   <h1>count:{count}</h1>
   <button onClick={() => setCount(count + 1)}>increment by 1</button>
   <button onClick={() => setCount(count -1)}> decrement by 1</button>


   <p>{count}</p>
   </>
  )
}

export default App
