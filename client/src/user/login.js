import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'


const LoginPage = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        email,
        password,
      });
      const token = response.data.token;
      setToken(token);
      alert("Login successful!"); 
      navigate(`/home/${username}`)
    } catch (error) {
      console.error("login failed", error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h2  className={styles.title}>User Login</h2>
        <input
          type="text"
          placeholder="Enter Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        ></input>
        <input
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        ></input>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        ></input>
        <button onClick={handleLogin} className={styles.button}>Login</button>
        <a href="/signup">New ! Then signup here</a>
      </div>
    </>
  );
};

export default LoginPage;
