import React, { useState } from "react";
import axios from "axios";



const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
     if (!email.includes("@")) {
    setError("Invalid email format ");
    setTimeout(() => setError(""), 3000);
    return; //  API call rok dega
  }

  if (password.length < 5) {
    setError("Password must be at least 5 characters");
    setTimeout(() => setError(""), 3000);
    return;
  }

  if (!username) {
    setError("Username is required");
    setTimeout(() => setError(""), 3000);
    return;
  }
    try {
      await axios.post("https://trading-backend-2d5t.onrender.com/api/auth/signup", {
        username,
        email,
        password,
      });

      setMessage("Signup successful, please login");
      setTimeout(() => {
      setMessage("");
      // redirect to login
      window.location.href = "/login";
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.msg || "Signup error");
    
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
        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

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

        <button onClick={handleSignup} style={styles.button}>
          Signup
        </button>
        <p style={{ marginTop: "15px" }}>
        Already have an account?
         </p>

        <button 
        onClick={() => (window.location.href = "/login")} 
         style={styles.loginButton}
         >
        Login
        </button>
   


      </div>
    </div>
    </>
  );
};

export default Signup;

// 🎨 styles
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
  loginButton: {
  width: "100%",
  padding: "10px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "5px",
},
};