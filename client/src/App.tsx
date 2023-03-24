import React, { useState } from "react";
import "./App.css";

export function App() {
  const [values, setValues] = useState();

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Scrim Shop</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register--input"
          onChange={handleSubmit}
        />
        <input
          type="text"
          name="cost"
          placeholder="Preço"
          className="register--input"
        />
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="register--input"
        />
        <button className="register-button">Cadastrar</button>
      </div>
    </div>
  );
}
