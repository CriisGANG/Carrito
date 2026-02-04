import { useState } from 'react'
import './App.css'
import Shop from './components/Shop/Shop'
import { Route, Routes, Navigate } from 'react-router-dom'
import CatalogPage from './components/pages/CatalogPage'
import CartPage from './components/pages/CartPage'
import ProductPage from './components/pages/ProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Routes>
      <Route path='/' element={<Shop/>}> 
         <Route index element={<CatalogPage/>} />
         <Route path='cart' element={<CartPage/>} />
         <Route path='product/:id' element={<ProductPage/>} />
      </Route>
    </Routes>
    
  )
}

export default App