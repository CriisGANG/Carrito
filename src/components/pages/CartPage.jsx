import React from 'react'
import CartView from '../CartView/CartView'
import { useOutletContext } from 'react-router-dom'

function CartPage() {
    const {lines, total, handleInc, handleDec, isAddDisabled} = useOutletContext();
  return (
    <CartView lines={lines} 
            total={total} 
            onInc={handleInc} 
            onDec={handleDec} 
            isAddDisabled={isAddDisabled}/>
  )
}

export default CartPage