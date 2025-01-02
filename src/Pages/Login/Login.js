import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate(); // For navigation after login

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        { email, password }
      );
      console.log("User logged in successfully:", response.data);
      console.log("UserId", response.data.data.user._id);
      
      // Save token and user info in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.data.user._id);
      localStorage.setItem("isLoggedIn", "true");

      // Redirect to home page after successful login
      navigate("/");  // Home page route

    } catch (error) {
      console.error("Login failed:", error);
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 404)
      ) {
        // Invalid email or password
        alert("Invalid email or password");
      } else {
        // Other errors
        alert("Error occurred. Please try again");
      }
    }
  };

  return (
    <div className="user">
      <div className="user_box">
        <form onSubmit={handleLogin}>
          <div className="user_box_input">
            <header className="section_header">
              <h1 className="login_header">Login</h1>
            </header>
            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                value={email}
                className="input_user_box"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                value={password}
                className="input_user_box"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="paragraph">
                <Link to="/forgetPassword">Forget?</Link>
              </p>
            </div>
          </div>

          <input type="submit" className="btn_login" value="Sign In" />
        </form>
        <p className="login_box_para">
          No account? <Link to="/signup">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
