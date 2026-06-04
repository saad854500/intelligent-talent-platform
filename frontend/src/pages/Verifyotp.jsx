import { verifyOtp } from "../services/Authenticate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Verifyotp() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const email = localStorage.getItem("loginEmail");

  const result = await verifyOtp({
    email,
    otp,
  });

  alert(result.message);

  if (result.message === "OTP Verified Successfully") {
    navigate("/");
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Verify OTP</h1>

        <p style={styles.message}>
          Enter the OTP code sent to your email.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
  },

  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
  },

  title: {
    textAlign: "center",
    marginBottom: "10px",
  },

  message: {
    textAlign: "center",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid gray",
  },

  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Verifyotp;