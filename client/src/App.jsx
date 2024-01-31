import { useState } from 'react'

import './App.css'
import OrderForm from './components/OrderForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <OrderForm/>
       </div>
    </>
  )
}

export default App
