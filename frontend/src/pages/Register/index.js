import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api.js';

export default function Register() {

    const [name, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [senha, setSenha] = useState('')

    const history = useHistory();

    async function Register(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            senha
        };

        try {
            const response = await api.post('tb_users', data)

            alert(`use seu email e senha para acessar sua conta`)

            history.push('/')
        }catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }

        console.log(data);
    }

    return (
    <div className="register-container">

        <div className="content">
            <form onSubmit={Register}>
                <input 
                placeholder="Nome"
                value={name}
                onChange={e  => setNome(e.target.value)}/>

                <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}/>

                <input
                maxLength={11}
                placeholder="Whatsapp"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}/>

                <input 
                placeholder="senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}/>

                <button className="button" type="submit">Cadastrar</button>
                
            </form>
        </div>
    </div>
    );
}