import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => 
{
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [err, setError] = useState(null)
    const navigate = useNavigate()

    const  handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>
    {
        e.preventDefault()
        try{
            const res = await axios.post('/auth/uye-ol', inputs)
            navigate("/giris-yap")
        }catch(err)
        {
            setError(err.response.data)
        }
    }

    return (
        <main className="login">
        <div className="form-box">
          <h1>Üye Ol</h1>
          <form>
            <div className="input-group">
                
              <div className="input-field">
                <ion-icon name="person-outline" role="img" className="md hydrated" aria-label="person outline"></ion-icon>
                <input required type="text" name="name" placeholder="Kullanici Adi" onChange={handleChange} />
              </div>

              <div className="input-field">
                <ion-icon name="mail-outline" role="img" className="md hydrated" aria-label="mail outline" ></ion-icon>
                <input required type="email" name="email" placeholder="Email" onChange={handleChange}/>
              </div>

              <div className="input-field">
                <ion-icon name="lock-open-outline" role="img" className="md hydrated" aria-label="lock open outline"></ion-icon>
                <input required type="password" name="password" placeholder="Sifre" onChange={handleChange}/>
              </div>

            </div>

                <a href="/giris-yap">Giris Yap</a>
                {err && <p className="error">{err}</p>}
            
            <div className="btn-field">
              <button onClick={handleSubmit}>Üye ol</button>
            </div>
          </form>
        </div>
      </main>
    )
}

export default Register