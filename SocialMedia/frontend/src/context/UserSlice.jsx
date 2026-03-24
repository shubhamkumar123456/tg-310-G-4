import React, { useState } from 'react'
import UserContext from './UserContext'

const UserSlice = (props) => {

    let token = localStorage.getItem('G4Auth')

    const [userData, setuserData] = useState({
        token:token?token:'',
        user:''
    });


    const getUser = async()=>{
        let res = await fetch('http://localhost:8090/users/loggedInUser',{
            method:"GET",
            headers:{
                'authorization':token
            }
        })

        let data = await res.json();
        // console.log(data)  // {user:{name, _id, email, password ...}}
        setuserData({...userData, user:data.user})  // {token, user}
    }


  return (
    <UserContext.Provider value={{getUser, userData}}>
            {props.children}
    </UserContext.Provider>
  )
}

export default UserSlice
