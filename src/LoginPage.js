

import './register.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = ({ onLogin }) => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();


    if (!username || !email || !password || !repassword) {
      alert('Please fill in all fields.');
      return;
    }
    if (password.length < 8){

        return;
    }
    if (password !== repassword) {
      alert('Passwords do not match.');
      return;
    }

   
    onLogin(); 
    navigate('/');
  };

  return (
    <section className="register-section d-flex align-items-center justify-content-center">
      <div className="register-mask w-100 h-100 d-flex align-items-center justify-content-center">
        <div className="card register-card">
          <div className="card-body p-5 text-white">
            <h2 className="text-uppercase text-center mb-5">Regjistrohu</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label className="form-label">Emri</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="form-label">E-mail</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="form-label">Password</label>
                <div className="text-danger mt-1 " style={{display:'none'}} id="passwordError">⚠️ Password must be at least 8 characters long.</div>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  value={repassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <label className="form-label">Perserit passwordin</label>
              </div>

              <div className="form-check d-flex justify-content-center mb-5">
                <input className="form-check-input me-2" type="checkbox" id="terms" />
                <label className="form-check-label" htmlFor="terms">
                 Pranoj të gjitha kushtet e përmendura në <a href="#!" className="text-white"><u>Kushtet e shërbimit</u></a>
                </label>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn register-btn btn-lg">
                  Konfirmo
                </button>
              </div>

              <p className="text-center text-white mt-5 mb-0">
                a keni një llogari?{' '}
                 <li className='login-here '><Link to="/"><u>Kyqu këtu</u></Link></li>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
