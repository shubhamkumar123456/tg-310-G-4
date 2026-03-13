import React, { useEffect } from 'react'

const showProducts = () => {
    const showData = async()=>{
        const res = await fetch('http://localhost:8090/products');
        const data = await res.data();
        console.log(data);
    }

    useEffect(()=>{
        showData()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default showProducts
