const express = require('express');
const cors = require('cors');
const fs = require("fs");
const dotenv = require('dotenv');

const app = express();
dotenv.config();
const PORT = process.env.PORT;
const FILE_PATH = "./users.json";

app.use(cors());
app.use(express.json());

// Helper function to read users from users.json
function readUsersFromFile() {
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data);
}

// Helper function to write users to users.json
function writeUsersToFile(users) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
}

// --- SIGNUP ENDPOINT ---
app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Read existing users
  const users = readUsersFromFile();

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "Email is already registered! Please login.",
    });
  }

  // Create new user object
  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    password: password,
  };

  // Add to list and save to JSON file
  users.push(newUser);
  writeUsersToFile(users);

  res.status(201).json({
    success: true,
    message: "Account created successfully!",
    user: { name: newUser.name, email: newUser.email },
  });
});


// --- LOGIN ENDPOINT ---
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const users = readUsersFromFile();

  // 1. Check if an account with this email exists at all
  const userExists = users.find((user) => user.email === email);

  if (!userExists) {
    return res.status(404).json({
      success: false,
      userNotFound: true, // Flag sent to frontend
      message: "No account found with this email. Would you like to sign up?",
    });
  }

  // 2. Check if password matches
  if (userExists.password !== password) {
    return res.status(401).json({
      success: false,
      userNotFound: false,
      message: "Incorrect password. Please try again!",
    });
  }

  // 3. Login successful
  res.status(200).json({
    success: true,
    message: "Login successful!",
    user: { name: userExists.name, email: userExists.email },
  });
});

app.listen(PORT,(req,res)=>{
    console.log("server is running at the port ",PORT);
})