import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

const Login = () => {

   
    let emailRef = useRef()
    let passwordRef = useRef()

    let navigate = useNavigate()


    async function handleSubmit(e){
        e.preventDefault()
        console.log("hello")
        let obj ={
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        // console.log(obj)
        let res = await fetch('http://localhost:8090/users/login',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })

        let data = await res.json();
        console.log(data)
        if(res.status==200 || res.status==201){
            toast.success(data.msg)
            localStorage.setItem('G4Auth',data.token)
            navigate('/')
        }
        else{
            toast.error(data.msg)
        }
        
    }

  return (
    <div>
        <form action="" className='flex flex-col gap-3 bg-black p-8 text-white w-[50%] mx-auto'>
          
            <label htmlFor="">Email</label>
            <input ref={emailRef} className='border p-2' type="text" placeholder='enter your email' />
            <label htmlFor="">Password</label>
            <input ref={passwordRef} className='border p-2' type="text" placeholder='enter your password' />
            <Link to='/foegetpassword'>forget password ?</Link>
            <button onClick={handleSubmit} className='bg-green-700'>Submit</button>

        </form>
    </div>
  )
}

export default Login
