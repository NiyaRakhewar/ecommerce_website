import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductListContext } from "../../context/ProductListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import { ErrorContext } from "../../context/ErrorContext";

export const SignUp = () => {
  const { state, dispatch } = useContext(ProductListContext);

  const { profile, setProfile, setToken, signUpData, setSignUpData } =
    useContext(AuthContext);

  const { errors, setErrors } = useContext(ErrorContext);

  const navigate = useNavigate();

  const handleInput = (e, fieldName) => {
    const { value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSignUp = async () => {
    const validationErrors = {};

    if (!signUpData.firstName) {
      validationErrors.firstName = "First Name Required !!";
    }

    if (!signUpData.lastName) {
      validationErrors.lastName = "Last Name Required !!";
    }

    if (!signUpData.email) {
      validationErrors.email = "Email Required !!";
    }

    if (!signUpData.password) {
      validationErrors.password = "Password Required !!";
    }

    if (!signUpData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm password Required !!";
    } else if (signUpData.password !== signUpData.confirmPassword) {
      validationErrors.confirmPassword = "Password Mismatch !!";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (signUpData.password === signUpData.confirmPassword) {
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify({
            firstName: signUpData.firstName,
            lastName: signUpData.lastName,
            email: signUpData.email,
            password: signUpData.password,
          }),
        });
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.createdUser));
        setToken(data.encodedToken);
        navigate("/login");
        setProfile({
          ...profile,
          firstName: data.createdUser.firstName,
          lastName: data.createdUser.lastName,
          email: data.createdUser.email,
        });
      } catch (err) {
        alert(err);
      }
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-details">
          <h1>Sign Up</h1>
          <label>First Name</label>
          <input
            value={signUpData.firstName}
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => handleInput(e, "firstName")}
            required
          />
          {errors.firstName && (
            <span className="error" style={{ color: "red" }}>
              *{errors.firstName}
            </span>
          )}

          <label htmlFor="">Last Name</label>
          <input
            value={signUpData.lastName}
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => handleInput(e, "lastName")}
            required
          />
          {errors.lastName && (
            <span className="error" style={{ color: "red" }}>
              *{errors.lastName}
            </span>
          )}

          <label>Email address</label>
          <input
            value={signUpData.email}
            type="text"
            placeholder="xyz@theFace.com"
            onChange={(e) => handleInput(e, "email")}
            required
          />
          {errors.email && (
            <span className="error" style={{ color: "red" }}>
              *{errors.email}
            </span>
          )}

          <div className="login-password">
            <label>Password</label>
            <div className="signup-password-input-container">
              <input
                value={signUpData.password}
                type={!state.showPass ? "password" : "text"}
                placeholder="Enter password"
                onChange={(e) => handleInput(e, "password")}
                required
              />

              <span
                className="eye-show-password"
                onClick={() =>
                  dispatch({ type: "SHOW_PASSWORD", payload: !state.showPass })
                }
              >
                <FontAwesomeIcon
                  icon={!state.showPass ? faEyeSlash : faEye}
                  style={{ color: "#000000" }}
                />
              </span>

              {errors.password && (
                <span
                  className="error-signup-password"
                  style={{ color: "red" }}
                >
                  *{errors.password}
                </span>
              )}

              <label style={{ marginTop: "37px" }}>Confirm Password</label>
              <input
                value={signUpData.confirmPassword}
                type={!state.showConfirmPass ? "password" : "text"}
                placeholder="Confirm password"
                id="confirm-password-input"
                onChange={(e) => handleInput(e, "confirmPassword")}
                required
              />
              <span
                className="eye-show-confirm-password"
                onClick={() =>
                  dispatch({
                    type: "SHOW_CONFIRM_PASSWORD",
                    payload: !state.showConfirmPass,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={!state.showConfirmPass ? faEyeSlash : faEye}
                  style={{ color: "#000000" }}
                />
              </span>
              {errors.confirmPassword && (
                <span
                  className="error-signup-confirm-password"
                  style={{ color: "red" }}
                >
                  *{errors.confirmPassword}
                </span>
              )}
            </div>
          </div>

          <div className="login-btn">
            <button onClick={handleSignUp}>Create New Account</button>
          </div>
          <div>
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
