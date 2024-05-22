import React, { useState } from "react";
import "./Auth.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log(response.data);
      history.push("/");
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
          <h3 className="Auth-form-title">Login In</h3>

          <div className="form-group">
            <label>Email:</label>
            <input
              required
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
              required
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark m-3 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
