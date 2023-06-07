import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const { login } =  useContext(AuthContext)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
    console.log(inputs);
  };

  return (
    <main className="login">
      <div className="form-box">
        <h1>Giris Yap</h1>
        <form>
          <div className="input-group ac">
            <div className="input-field">
              <ion-icon
                name="mail-outline"
                role="img"
                className="md hydrated"
                aria-label="mail outline"
              ></ion-icon>
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <ion-icon
                name="lock-open-outline"
                role="img"
                className="md hydrated"
                aria-label="lock open outline"
              ></ion-icon>
              <input
                required
                type="password"
                name="password"
                placeholder="Sifre"
                value={inputs.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <a href="/uye-ol">Üye ol</a>
          {err && <p className="error">{err}</p>}

          <div className="btn-field">
            <button onClick={handleSubmit}>Giris Yap</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
