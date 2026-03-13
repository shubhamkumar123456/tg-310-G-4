import React, { useRef, useState } from 'react'

const Addproducts = () => {

    let priceRef = useRef()
    let nameRef = useRef()
    let descRef = useRef()
    let stockRef = useRef()

    const [image, setimage] = useState('');

    const handleChanger = (e)=>{
        const file = e.target.files[0]
        setimage(file)
    }
    
    async function handleSubmit(){
        // let obj = {
        //     name:nameRef.current.value,
        //     description:descRef.current.value,
        //     price:priceRef.current.value,
        //     stock:stockRef.current.value,
        //     image:image
        // }
        const formdata = new FormData();
        formdata.append('name',nameRef.current.value)
        formdata.append('price',priceRef.current.value)
        formdata.append('description',descRef.current.value)
        formdata.append('stock',stockRef.current.value)
        formdata.append('image',image)
        console.log(formdata)
        console.log(formdata.values( ))
        console.log(formdata.values( ))
        try {
            let res = await fetch('http://localhost:8090/products/add',{
            method:"post",
            body:formdata
        })
        let data = await res.json()
        console.log(data)
        } catch (error) {
                console.log(error)
        }
       


    }

  return (
    <div className='flex flex-col gap-2 w-[60%] m-auto my-7'>
        <input ref={nameRef} className='border p-2 rounded-md outline-none' type="text"  placeholder='product name'/>
        <input ref={priceRef} className='border p-2 rounded-md outline-none' type="number"  placeholder='product price'/>
        <input ref={stockRef} className='border p-2 rounded-md outline-none' type="text"  placeholder='product stock'/>
        <textarea ref={descRef} className='border p-2 rounded-md outline-none' name="" placeholder='enter description' id=""></textarea>
        <input onChange={handleChanger} type="file" className=' p-2 rounded-md outline-none' />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Addproducts
