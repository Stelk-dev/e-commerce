import React, { useEffect, useState } from 'react'
import { getProducts } from "./service/http"
import { Product } from "./model/Product"
import { Link } from 'react-router-dom';

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
      <Link to={"/product/" + product.titleWithNoSpace} state={{ product: product }}>
        <div style={{color: "black", margin: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} key={product.title}>
          <img src={product.mainImage} width="200px" height="200px" alt={"phone - " + product.title}/>
          <div>
            {product.title}
          </div>
        </div>
      </Link>
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
                    <ProductItemComponent product={e} key={e.title} />
                )
              }  
            </div>
        }
      </div>
    </div>
  )
}