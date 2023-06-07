import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ProductListContext } from "../../context/ProductListContext";
import { ErrorContext } from "../../context/ErrorContext";

export const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { errors, setErrors } = useContext(ErrorContext);

  const { state, dispatch } = useContext(ProductListContext);
  const { setToken, profile, setProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginGuest = async () => {
    toast.success("Successfully logged in as Guest", {
      autoClose: 1000,
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    const creds = {
      email: "niharikarakhewar@gmail.com",
      password: "Niya@theFace",
    };
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(creds),
    });
    const data = await response?.json();

    if (data.encodedToken) {
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate(location?.state?.from?.pathname || "/");
      console.log("login location", location);
      setToken(data.encodedToken);
      setProfile({
        ...profile,
        firstName: data.foundUser.firstName,
        lastName: data.foundUser.lastName,
        email: data.foundUser.email,
      });
    }
  };

  const handleLogin = async () => {
    const validationErrors = {};

    if (!userData.email) {
      validationErrors.email = "Email Required !!";
    }

    if (!userData.password) {
      validationErrors.password = "Password Required !!";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.encodedToken) {
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate(location?.state?.from?.pathname || "/");
      setToken(data.encodedToken);
      setProfile({
        ...profile,
        firstName: data.foundUser.firstName,
        lastName: data.foundUser.lastName,
        email: data.foundUser.email,
      });
      toast.success("Successfully logged in ", {
        autoClose: 1000,
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Wrong Credentials", {
        autoClose: 1000,
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-details">
          <h1>Sign In</h1>

          <label>Email address : </label>
          <input
            type="email"
            placeholder="xyz@theFace.com"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
          />
          {errors.email && (
            <span className="error-email" style={{ color: "red" }}>
              *{errors.email}
            </span>
          )}

          <label>Password : </label>
          <div className="password-input-container">
            <input
              type={state.showPass ? "text" : "password"}
              placeholder="xyz123"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              required
            />
            {errors.password && (
              <span className="error-password" style={{ color: "red" }}>
                *{errors.password}
              </span>
            )}
            <i
              className="login-eye"
              onClick={() =>
                dispatch({ type: "SHOW_PASSWORD", payload: !state.showPass })
              }
            >
              <FontAwesomeIcon
                icon={!state.showPass ? faEyeSlash : faEye}
                // style={{ color: "#000000" }}
              />
            </i>
          </div>

          <div className="login-btn">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLoginGuest}>Be My Guest</button>
          </div>
          <div>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
