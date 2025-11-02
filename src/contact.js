import React, { useState } from "react";
import './contact.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulari u dërgua:", formData);
  };

  return (
    <div className="cont">
      <div className="info-box">
        <h2>Informacione Kontakti</h2>
        <p><strong>Rrjetet Sociale:</strong></p>
        <ul>
          <li>Facebook: <a href="https://facebook.com" target="_blank" rel="noreferrer">facebook.com/profili</a></li>
          <li>Instagram: <a href="https://instagram.com" target="_blank" rel="noreferrer">instagram.com/profili</a></li>
          <li>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/profili</a></li>
        </ul>
        <p><strong>Numri i Telefonit:</strong> +383 69 123 4567</p>
        <p><strong>Lokacioni:</strong> Gjilan, Kosove</p>
      </div>

      <div className="hapsira"></div>

      <div className="form-box">
        <h1>Na Kontaktoni</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Emri Juaj</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Juaj</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Mesazhi Juaj</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button className="btn-submit" type="submit">
            Dërgo Mesazh
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
