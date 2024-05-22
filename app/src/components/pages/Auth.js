import React, { useState } from "react";
import "./Auth.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Auth(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleclik = () => {
    history.push("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
      history.push("/login");
      // Assuming backend sends back user data
      // Optionally, you can redirect the user to a different page upon successful signup
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="Auth-form-container">
      <form onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between ">
            <button type="submit" className="btn m-3 btn-dark">
              signup
            </button>
            <button
              onClick={handleclik}
              type="submit"
              className="btn m-3 btn-dark"
            >
              login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
