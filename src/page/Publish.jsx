import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
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
  // const [offerId, setOfferId] = useState(null);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setPicture(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: "image/jpeg, image/png, image/gif",
  });

  const navigate = useNavigate();

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

      console.log("API answer :", response.data);
      navigate(`/offer/${response.data._id}`);
    } catch (error) {
      console.log(formData);

      console.error("Error during publish :", error.response);
    }
  };

  return userToken ? (
    <div className="publish">
      <div className="container">
        <h1>Vends ton article</h1>
        <form onSubmit={handleSubmit}>
          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? "active" : ""}`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Déposez l'image ici...</p>
            ) : (
              <p>
                Glissez et déposez l'image ici, ou cliquez pour sélectionner un
                fichier
              </p>
            )}
          </div>
          <div>
            <span>Titre</span>
            <input
              type="text"
              placeholder="Titre"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
            <span>Description</span>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <p>Prix</p>
          <input
            type="number"
            placeholder="Prix"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <p>État</p>
          <input
            type="text"
            placeholder="État"
            value={condition}
            onChange={(event) => setCondition(event.target.value)}
          />
          <p>Lieu</p>
          <input
            type="text"
            placeholder="Lieu"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <p>Marque</p>
          <input
            type="text"
            placeholder="Marque"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          />
          <p>Taille</p>
          <input
            type="text"
            placeholder="Taille"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          />
          <p>Couleur</p>
          <input
            type="text"
            placeholder="Couleur"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <button type="submit">Publier</button>
        </form>
      </div>
    </div>
  ) : (
    <Navigate to="/signin" />
  );
};

export default Publish;
