import React, {useState, useEffect} from 'react'
import ProductCard from '../component/ProductCard.tsx'
import "./Shop.css"

export default function Shop() {
    const [products, setProducts] = useState([])
    // fetch data from api
    async function fetchData(){
      const res = await fetch("http://10.111.3.78:3001/api/products")
      const data = await res.json()
      setProducts(data)
    }
    useEffect(()=> {
      fetchData()
    })
  return (
    <div>
        {products.map((product) => (
            <ProductCard data={product} />
        ))}
    </div>
  )
}
