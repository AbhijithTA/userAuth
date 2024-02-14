import React, { useState } from "react";
import axios from "axios";
import styles from './signup.module.css'

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        {
          username,
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = response.data;
      console.log(data);
      alert("Sign up successful!");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
      <a href="/login">Already user! Login here</a>
    </div>
  );
};

export default UserRegistration;
