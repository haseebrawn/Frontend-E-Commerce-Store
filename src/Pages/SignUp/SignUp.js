import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [nameAndSurname, setNameAndSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState(null); // File state for the uploaded image

  const navigate = useNavigate(); // For navigation

  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(); // Use FormData to send form data including files
    formData.append("username", username);
    formData.append("nameandsurname", nameAndSurname);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("country", country);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/signUP",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("User signed up successfully:", response);

      // Navigate to login page after successful signup
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error.response?.data?.message || error.message);
      // Display an error message if signup fails
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
              <label className="custom_form" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="nameandsurname">
                Name and Surname
              </label>
              <input
                type="text"
                value={nameAndSurname}
                onChange={(e) => setNameAndSurname(e.target.value)}
              />
            </div>
            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="country">
                Country
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="user_box_input_box">
              <label className="custom_form" htmlFor="image">
                Upload Image
              </label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
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
