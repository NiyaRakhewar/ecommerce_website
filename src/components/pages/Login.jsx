// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
// // import { FoodListContext } from "../../context/FoodListContext";
// import { AuthContext } from "../../context/AuthContext";

// export const Login = () => {
//   const [userData, setUserData] = useState({
//     email: "",
//     password: "",
//   });

//   // const { state, dispatch } = useContext(FoodListContext);
//   const { setToken } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // const handleLogin = () => {
//   //   dispatch({ type: "ON_CLICKING_GUEST_BUTTON" });
//   //   navigate(location?.state?.from?.pathname || "/");
//   // };

//   const handleLoginGuest = async () => {
//     const creds = { email: "adarshbalika@gmail.com", password: "adarshbalika" };
//     let response = await fetch("/api/auth/login", {
//       method: "POST",

//       body: JSON.stringify(creds),
//     });
//     const data = await response?.json();
//     console.log(data);
//     if (data.encodedToken) {
//       localStorage.setItem("token", data.encodedToken);
//       navigate(location?.state?.from?.pathname || "/");
//       setToken(data.encodedToken);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <div className="login-details">
//           <h1>Sign In</h1>

//           <label>Email address</label>
//           <input
//             type="email"
//             placeholder="xyz@gmail.com"
//             value={userData.email}
//             onChange={(e) =>
//               setUserData({ ...userData, email: e.target.value })
//             }
//           />

//           {/* <label>Password</label>
//           <div className="password-input-container">
//             <input
//               type={state.showPassword ? "text" : "password"}
//               placeholder="xyz1234"
//               value={userData.password}
//               onChange={(e) =>
//                 setUserData({ ...userData, password: e.target.value })
//               }
//             />
//             {/* <span
//               className="login-eye"
//               onClick={() => dispatch({ type: "ON_CLICKING_SHOW_PASSWORD" })}
//             >
//               <FontAwesomeIcon
//                 icon={state.showPassword ? faEyeSlash : faEye}
//                 style={{ color: "#000000" }}
//               />
//             </span> */}
//           {/* </div>  */}

//           <div className="login-btn">
//             <button>Login</button>
//             <button onClick={handleLoginGuest}>Be My Guest</button>
//           </div>
//           <div>
//             Don't have an account? <Link to="/signup">Sign Up</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {  useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export const Login = () => {

  const {setToken} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLoginGuest = async () =>{
    const credentials = {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika"
    }

    let response = await fetch("/api/auth/login",{
      method: "POST",
      body: JSON.stringify(credentials),
    })

    const data = await response?.json()

    if(data.encodedToken){
      localStorage.setItem("token", data.encodedToken)
      navigate(location?.state?.from?.pathname || "/")
      setToken(data.encodedToken)
    }
  }

  return (
    <div>
      <div className='form'>
      <h1>Sign In</h1>

      <label>Email address</label>
          <input
             type="email"
             placeholder="xyz@TheFace.com"
         />

<label>Password</label>
          <input
             type="password"
             placeholder="xyz123"
         />
        <div>
        <button>Login</button>
         <button onClick={handleLoginGuest}>Login as a Guest</button>
        </div>

         <div>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
      </div>
    </div>
  )
}
