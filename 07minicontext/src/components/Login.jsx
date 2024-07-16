
import React, { useContext, useState } from 'react'

function Login()  {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(useContext)
 
    const handleSubmit = (e)=>{

        e.prevenDefault()
        setUser({username,password})

    }

  return (
    <div>
    <h2>Login</h2>
    <input type='text' value = {username} onClick={(e)=> setUsername(e.target.value)} placeholder='UserName' />
    <input type='text' value = {password} onClick= {(e)=> setPassword(e.target.value)}  placeholder='PassWord' />
    <button onClick={handleSubmit}> Submit </button>

    </div>
  )
}

export default Login