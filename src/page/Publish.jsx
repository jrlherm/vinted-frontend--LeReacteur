import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Publish = ({ userToken }) => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("picture", picture);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Réponse de l'API :", response.data);

      console.log(formData);
      // Redirige automatiquement vers la page d'accueil après publication
      return <Navigate to="/" />;
    } catch (error) {
      console.log(formData);

      console.error("Erreur lors de la publication :", error.message);
      // Gérer l'erreur, afficher un message, etc.
    }
  };

  return (
    <div className="publish">
      <div className="container">
        <h1>Vends ton article</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            type="number"
            placeholder="Prix"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <input
            type="text"
            placeholder="État"
            value={condition}
            onChange={(event) => setCondition(event.target.value)}
          />
          <input
            type="text"
            placeholder="Lieu"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <input
            type="text"
            placeholder="Marque"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          />
          <input
            type="text"
            placeholder="Taille"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          />
          <input
            type="text"
            placeholder="Couleur"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <input
            type="file"
            onChange={(event) => setPicture(event.target.files[0])}
          />
          <button type="submit">Publier</button>
        </form>
      </div>
    </div>
  );
};

export default Publish;
