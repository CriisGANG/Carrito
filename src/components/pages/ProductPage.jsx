import React from 'react'
import { useOutlet, useOutletContext, useParams } from 'react-router-dom'
import styles from './ProductPage.module.css'

function ProductPage() {
    const {catalog, handleAdd, isAddDisabled, isInStock, } = useOutletContext();
    const {id} = useParams();

    const product = catalog.products.find((p) => p.id === id)
  return (
    <section>
        <h2>{product.name}</h2>
        <p><strong>Preu:</strong> {product.price}</p>
        <p><strong>Stock:</strong>{product.stock}</p>

        <button
          disabled={!product.isInStock() || isAddDisabled(product.id)} onClick = {() => handleAdd(product.id) }>
                      Afegir
                    </button>
    </section>
  )
}

export default ProductPage