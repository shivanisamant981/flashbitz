import { useState } from 'react'
import Button from './components/Button'


function App() {
  const [count, setCount] = useState(0)
   const handle=()=>console.log("hello shivani samant")
  return (
    <>
    <div className="text-8xl">hhi </div>
   <Button label="hellop" onclick={handle}></Button>
     
    </>
  )
}

export default App
