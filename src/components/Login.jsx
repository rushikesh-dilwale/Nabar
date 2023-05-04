import React from 'react'

const Login = () => {
  return (
   
        <form className='L'>
            <div >
            <label htmlFor='email' >Email</label>
            <input type='text' name='email'id='email'></input>
            </div>
            <div>
                <label htmlFor='Password'>Password</label>
                <input type='password' name='password' id='password'></input>
            </div>
        </form>
    
  )
}

export default Login