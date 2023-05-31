import React from 'react'
import { Link } from 'react-router-dom'
export const SignUp = () => {
  return (
    <div>

      <div style={{marginTop: "20px"}}>
     <div className='form'>
     <h1>Sign Up</h1>
     <label> Name
            <input type="text" placeholder="Ms./Mr.TheFace" />
        </label>
        <label> Email address
            <input type="text" placeholder="xyz@TheFace.com" />
        </label>
        <label> Password
            <input type="text" placeholder="xyz1234" />
        </label>
        <label> Confirm Password
            <input type="text" placeholder="xyz1234" />
        </label>

       <Link to="/login"> <button > Create New Account </button></Link>
    
        <p>Already have an account? <Link to="/login">Sign In</Link></p>
     </div>
      </div>
    </div>
  )
}
