import { useState } from 'react'

import './App.css'
import OrderForm from './components/OrderForm'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)
  const [showComponents, setShowComponents] = useState (false);

 const handleClick = () => {
  setShowComponents(true)
 }

  return (
    <>
      <div>
        <button onClick={handleClick}>Cart</button>
        {showComponents &&<Cart items={["pepper","salt","butter"]}/> }
        <OrderForm/> 
       </div>
    </>
  )
}

export default App
