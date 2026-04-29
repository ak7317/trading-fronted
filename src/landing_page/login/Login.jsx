import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
 const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3002/api/auth/login", {
        email,
        password,
      });

      //  token + user store
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
       setMessage("Login successful ");
      //  dashboard redirect (correct port)
      setTimeout(() => {
    window.location.href = `http://localhost:3001?token=${res.data.token}`;
    }, 1500);  
  } catch (err) {
      if (err.response?.data?.msg === "User not found") {
        setError("User not found! Please signup.");
      } else {
        setError("Invalid credentials");
      }
       setTimeout(() => {
      setError("");
    }, 3000);
    }
  };

  return (
    <>
    {message && <div style={styles.toastSuccess}>{message}</div>}
    {error && <div style={styles.toastError}>{error}</div>}
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </div>
    </div>
    </>
  );
};

export default Login;

// 🎨 styles (same as before)
const styles = {
  toastSuccess: {
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#28a745",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "5px",
},

toastError: {
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#dc3545",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "5px",
},
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f5f5f5",
  },
  box: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};