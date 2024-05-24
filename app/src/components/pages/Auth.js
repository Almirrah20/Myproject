import React, { useState } from "react";
import "./Auth.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Auth(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState();

  const handleclik = () => {
    history.push("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/register", {
        email,
        password,
      });
      if (response.status === 201) {
        console.log(response.data);
        history.push("/login");
      } else {
        if (response.status === 400) {
          setError(response.data);
        } else {
          setError("");
        }
      }
    } catch (error) {
      console.error("Error signing up:", error.response.data.error);
      setError(error.response.data.error); // Set the error received from the server
    }
  };

  return (
    <div className="Auth-form-container ">
      <form onSubmit={handleSubmit} className="Auth-form">
        <h3 className="Auth-form-title">Sign Up</h3>
        <div className="Auth-form-content">
          <p>{error}</p>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
          </div>
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
          <div className="form-group">
            <label>confirm Password:</label>
            <input
              required
              type="password"
              className="form-control"
              placeholder="Password"
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
