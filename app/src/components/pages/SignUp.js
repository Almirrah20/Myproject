import React from "react";
import "../../App.css";
import "./Signup.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <Link to="/Auth">
        <button className="btn">Sign In</button>
      </Link>
    </div>
  );
}
