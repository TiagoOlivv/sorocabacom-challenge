import React, { FormEvent, useState } from "react";

import { FormStyle } from "./styles";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputError, setInputError] = useState("");

  async function handleAddRepository(event: FormEvent) {
    event.preventDefault();
    if (!name) return setInputError("Digite o seu nome no formulário");
    if (!email) return setInputError("Digite o seu email no formulário");
    if (!message) return setInputError("Digite uma mensagem no formulário");

    try {
      alert("Formulário submetido com sucesso!");
      setInputError("");
    } catch (err) {
      setInputError("Erro ao submeter formulário!");
    }
  }

  return (
    <FormStyle onSubmit={handleAddRepository}>
      <h1>FORMULÁRIO</h1>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </span>
      {inputError && <strong>{inputError}</strong>}
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <input
        type="text-area"
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div>
        <button type="submit">Enviar</button>
      </div>
    </FormStyle>
  );
};

export default Form;
