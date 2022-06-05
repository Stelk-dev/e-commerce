import React, { useEffect, useState } from 'react'
import { getProducts } from "./service/http"
import { Product } from "./model/Product"

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    init();
    return;
  }, [])

  async function init(){
    const response = await getProducts();
    setProducts(response.map(e => Product.fromJson(e)))
  }

  return (
    <div>
      <h1>Ciao</h1>
      {
        products.length === 0 ? <p>Loading...</p> :
        <ul>
          {products.map(e => <li key={e.id}>{e.rating.rate}</li>)}
        </ul>
      }
    </div>
  )
}