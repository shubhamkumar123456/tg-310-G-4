import React, { useEffect, useState } from 'react'

const Home = () => {
    const [products, setproducts] = useState([]);
    const getProducts = async()=>{
        let res = await fetch('http://localhost:8090/products')
        let data = await res.json()
        console.log(data)
        setproducts(data)
    }
    useEffect(()=>{
        getProducts()
    },[])


    const handleAddCart = async(p)=>{
      console.log(p)
       let res = await fetch('http://localhost:8090/cart/add',{
        method:'post',
        headers:{
          'content-type':'application/json',
          'authorization':localStorage.getItem('token')
        },
        body:JSON.stringify({  product_id:p.id, quantity:1 })
       })
        let data = await res.json()
        console.log(data)
    }
  return (
    <div className='grid grid-cols-4 gap-2 '>
      {
        products.map((product)=>{
          return <div key={product.id}>
            <img className='h-[200px]' src={'http://localhost:8090/uploads/'+product.image} alt={product.name}/>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={()=>handleAddCart(product)} className='bg-green-500 rounded px-4 py-2'>Add to cart</button>
          </div>
        })
      }
    </div>
  )
}

export default Home
