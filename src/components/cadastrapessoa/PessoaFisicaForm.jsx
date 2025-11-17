// src/componentes/cadastrapessoas/PessoaFisicaForm.jsx

import React from 'react';
import { Form, DatePicker, Input } from 'antd';

export default function PessoaFisicaForm() {
    return (
        <>
            <h3 style={{ marginTop: 20, marginBottom: 10 }}>Dados Específicos (PF)</h3>

            {/* 🆕 CAMPO OBRIGATÓRIO PARA A ATIVIDADE */}
            <Form.Item
                label="Data de Nascimento"
                name="dataNascimento"
                rules={[
                    { required: true, message: "Informe a data de nascimento!" }
                ]}
            >
                {/* O DatePicker retorna um objeto dayjs, que é tratado pelo PessoaFormOOV2 */}
                <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" placeholder="DD/MM/AAAA" />
            </Form.Item>

            {/* Bloco Título Eleitoral (Geralmente aninhado sob o nome 'titulo') */}
            <Form.Item label="Título Eleitoral" style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', gap: 10 }}>
                    <Form.Item
                        name={['titulo', 'numero']}
                        noStyle
                        rules={[{ required: true, message: "Título!" }]}
                    >
                        <Input placeholder="Número do Título" style={{ width: '50%' }} maxLength={12} />
                    </Form.Item>
                    <Form.Item
                        name={['titulo', 'zona']}
                        noStyle
                        rules={[{ required: true, message: "Zona!" }]}
                    >
                        <Input placeholder="Zona" style={{ width: '25%' }} maxLength={4} />
                    </Form.Item>
                    <Form.Item
                        name={['titulo', 'secao']}
                        noStyle
                        rules={[{ required: true, message: "Seção!" }]}
                    >
                        <Input placeholder="Seção" style={{ width: '25%' }} maxLength={4} />
                    </Form.Item>
                </div>
            </Form.Item>
        </>
    );
}