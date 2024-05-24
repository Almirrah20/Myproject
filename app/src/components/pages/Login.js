import React, { useState } from "react";
import "./Auth.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      // Assuming your API returns some data upon successful login
      if (response.status === 201) {
        // Redirect to the home page upon successful login
        console.log(response.status);
        history.push("/home");
      } else {
        if (response.status === 400)
          // Handle error if login is unsuccessful
          console.log(response.status);
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="Auth-form-container">
      <form onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login In</h3>
          <p>{error}</p>
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
