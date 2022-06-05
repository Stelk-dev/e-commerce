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

  const ProductItemComponent = ({product}) =>{
    return (
      <div style={{margin: "12px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <img src={product.image} width="200px" height="200px" alt=""/>
      </div>
    )
  }

  return (
    <div>
      <h1>My E-Commerce</h1>
      <div>
        {
          products.length === 0 ? <p>Loading...</p> :
            <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto"}}>
              {
                products.map(e =>
                    <ProductItemComponent product={e} />
                )
              }  
            </div>
        }
      </div>
    </div>
  )
}