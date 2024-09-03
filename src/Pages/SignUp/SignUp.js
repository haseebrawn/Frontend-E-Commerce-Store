import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/signUP",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      console.log("User signed up successfully:", response);
      // Handle successful signup, maybe redirect user to another page
      //   router.push("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle signup failure, maybe display error message to user
    }
  };

  return (
    <div className="user">
      <div className="user_box">
        <form onSubmit={handleSignUp}>
          <div className="user_box_input">
          <header className="section_header">
              <h1 className="login_header">Create Account</h1>
            </header>
            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="First Name">
                First Name
              </label>
              <input
                type="firstname"
                // placeholder="Please Type your Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="Last Name">
                Last Name
              </label>
              <input
                type="firstname"
                // placeholder="Please Type your Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                // placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="user_box_input_box">
              <label htmlFor="password" className="custom_form">
                <p>Password</p>
              </label>
              <input
                type="password"
                value={password}
                // placeholder="........"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <input type="submit" className="btn_login" value="Create" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
