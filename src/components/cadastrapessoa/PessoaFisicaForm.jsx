// PessoaFisicaForm.jsx
import React from "react";
import { Form, Input, DatePicker } from "antd";
import "./pessoaform.css";

function PessoaFisicaForm() {
  return (
    <>
    <h2>Cadastro de Pessoa Física</h2>
      <Form.Item
        label="CPF"
        name="cpf"
        rules={[{ required: true, message: "Informe o CPF!" }]}
      >
        <Input placeholder="Somente números" maxLength={11} />
      </Form.Item>
      <Form.Item label="Data de Nascimento" name="dataNascimento">
        <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Título Eleitoral - Número" name={["titulo", "numero"]}>
        <Input placeholder="Número do título" />
      </Form.Item>
      <Form.Item label="Zona" name={["titulo", "zona"]}>
        <Input placeholder="Zona eleitoral" />
      </Form.Item>
      <Form.Item label="Seção" name={["titulo", "secao"]}>
        <Input placeholder="Seção eleitoral" />
      </Form.Item>
    </>
  );
}

export default PessoaFisicaForm;