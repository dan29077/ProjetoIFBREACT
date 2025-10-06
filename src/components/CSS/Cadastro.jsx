// src/components/Cadastro.jsx
import React, { useState } from "react";
import "./CSS/Cadastro.css";  // ou "../CSS/Cadastro.css", dependendo da estrutura

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Aqui você faria a lógica de cadastro (API, validações, etc.)
    console.log("Dados de cadastro:", { nome, email, senha });
    // Você pode limpar os campos, redirecionar, exibir mensagem, etc.
    setNome("");
    setEmail("");
    setSenha("");
  }

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
