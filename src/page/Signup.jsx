import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    subscribe: false,
  });

  // Function to handle every change in the form to store it in formData
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (click) => {
    click.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="signup">
      <div className="container">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="enroll-newsletter">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            <label htmlFor="subscribe">S'inscrire à la newsletter</label>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Chargement..." : "S'inscrire"}
          </button>
          <Link to="/signin">Tu as déjà un compte ? Connecte-toi !</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
