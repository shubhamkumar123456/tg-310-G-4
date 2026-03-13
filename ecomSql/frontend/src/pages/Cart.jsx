import React, { useEffect, useState } from 'react'

const Cart = () => {
    let token = localStorage.getItem('token')
    const [Cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const getCartItem = async()=>{
        const res = await fetch(`http://localhost:8090/cart`,{
            method:'get',
            headers:{
                'authorization':token
            }
        })

        let data = await res.json();
        console.log(data)
        setCart(data.items)
        setTotal(data.total)
    }

    useEffect(()=>{
        getCartItem()
    },[])


    const updateQuantity = async(cart_item_id,action)=>{
        console.log(cart_item_id)
        console.log(action)
         const res = await fetch(`http://localhost:8090/cart/updateCart`,{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({cart_item_id,action})
        })
        let data = await res.json();
        console.log(data)
        getCartItem()

    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>name</th>
                    <th>price</th>
                    <th>Image</th>
                    <th>quantity</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {
            Cart.map((obj, i)=>{
                return <tr key={obj.cart_item_id}>
                    <td>{i+1}</td>
                    <td>{obj.name}</td>
                    <td>{obj.price}</td>
                    <td><img className='h-[70px]' src={'http://localhost:8090/uploads/'+obj.image} alt="image" /></td>
                    <td>
                        <button onClick={()=>updateQuantity(obj.cart_item_id,'increase')} className='bg-blue-500 px-2 mx-1 py-2 rounded'>+</button>
                            {obj.quantity}
                        <button onClick={()=>updateQuantity(obj.cart_item_id,'decrease')} className='bg-blue-500 px-2 mx-1 py-2 rounded'>-</button>    
                    </td>
                </tr>
            })
        }
            </tbody>
        </table>
        <h1 className='text-center'>Total = {total}</h1>
        <button className='bg-green-400 px-4 py-2 rounded'>Order Now</button>

    </div>
  )
}

export default Cart
