const express = require("express");
const app = express();
const PORT = 3001;
const connectDB = require("./db/index");
const User = require("./models/user.model");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { setUser } = require("./service/auth.service");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

connectDB("mongodb://localhost:27017/db")
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY");
    // Start server only after DB connection is established
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("SOME ERROR WHILE CONNECTING DB", err));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate email and password (optional)
    if (!email || !password) {
      throw new Error("Please enter your email and password."); // Throw a more specific error
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Email already in use."); // Throw a specific error
    }

    // Create a new user if the user doesn't exist
    const user = await User.create({
      email,
      password, // Handle password hashing if needed
    });

    if (!user) {
      throw new Error("Something went wrong while creating user.");
    }

    res.status(201).json({ message: "User Created Successfully" }); // Use 201 Created status code
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(400).json({ error: error.message }); // Send specific error message
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not Found.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Incorrect email or password");
    }

    const token = setUser(user);

    return res.status(201).json({ token, message: "sucessfully login" });
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(400).json({ error: error.message });
  }
});
