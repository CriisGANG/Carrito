import { useState } from 'react'
import './App.css'
import Shop from './components/Shop/Shop'
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
    
  )
}

export default App