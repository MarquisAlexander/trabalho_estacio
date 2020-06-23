import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api.js';

import logo from '../../assets/logo.svg';

import './styles.css';

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
        <section>
                    <img src={logo} alt="minhas tarefas"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e deixe-nos ajudá lo a organizar seu dia</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#0078E7"/>
                        Já tenho cadastro
                    </Link>
                </section>

            <form onSubmit={Register}>
                <input
                required
                placeholder="Nome"
                value={name}
                onChange={e  => setNome(e.target.value)}/>

                <input
                required
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}/>

                <input
                required
                maxLength={11}
                placeholder="Whatsapp"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}/>

                <input
                required
                type="password"  
                placeholder="senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}/>

                <button className="button" type="submit">Cadastrar</button>
                
            </form>
        </div>
    </div>
    );
}