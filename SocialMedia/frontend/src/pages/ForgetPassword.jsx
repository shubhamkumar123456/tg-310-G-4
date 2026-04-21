import React, { useRef } from 'react'

const ForgetPassword = () => {

    let x = useRef(10)  // { current:10}   // {current:<input/>}


    async function handleSubmit(){
        let obj = {
            email:x.current.value
        }
        console.log(obj)

        let res = await fetch('http://localhost:8090/users/forgetpassword',{
            method:"post",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })

        let data = await res.json();
        console.log(data)

    }
  return (
    <div className='flex justify-center items-center gap-2 h-[70vh]'>
        <div className='flex items-center gap-4'> 
            <input ref={x} className='border outline-none p-2' type="email" placeholder='enter your email' />
            <button onClick={handleSubmit} className='bg-green-800 text-white hover:bg-green-600 px-3 py-2'>submit</button>
        </div>
    </div>
  )
}

export default ForgetPassword
