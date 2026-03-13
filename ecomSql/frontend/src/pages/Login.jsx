import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    
    let emailRef = useRef()
    let passwordRef = useRef()

    let navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()
        let obj = {
           
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        let res = await fetch('http://localhost:8090/users/login',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        });
        let data = await res.json();
        if(res.status==200 || res.status==201){
            console.log(data)
            localStorage.setItem('token',data.token);
            if(data.role==='user'){
                navigate('/')
            }
            else{
                navigate('/adminDashboard')
            }
        }
        else{
            console.log(data);
        }
    }
  return (
    <div className='h-screen flex justify-center items-center'>
  <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
    <div className="text-center">
      <img className="h-8 w-auto mx-auto" src="https://e7.pngegg.com/pngimages/673/346/png-clipart-shopping-centre-computer-icons-bag-shopping-cart-bag-white-luggage-bags.png" alt="Apple" />
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Sign in to your account</h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?
        <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">Sign Up →</Link>
      </p>
    </div>
    <form className="space-y-6 mt-8">
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email address</label>
        <div className="mt-1">
          <input ref={emailRef} className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm border-gray-300 placeholder-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" id="email"  type="email" autoComplete="email" placeholder="your@email.com" required  />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
        <div className="mt-1">
          <input ref={passwordRef} className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm border-gray-300 placeholder-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-indigo-500 focus:border-indigo-500" id="password" type="password" placeholder="••••••••" required />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <div className="text-sm">
          <Link href className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">Forgot your password?</Link>
        </div>
      </div>
      <div>
        <button onClick={handleSubmit} type="submit" className="inline-flex items-center rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-base bg-black font-medium text-white hover:bg-gray-800 border border-black focus:ring-black w-full justify-center">Sign in</button>
      </div>
    </form>
  </div>
</div>

  )
}

export default Login
