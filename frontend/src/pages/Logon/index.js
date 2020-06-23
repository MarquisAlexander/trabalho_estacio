import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api.js';

import logo from '../../assets/logo.svg';

import './styles.css'

export default function Logon() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();


    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post("session", {email, senha});

            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', response.data.name);
            localStorage.setItem('userId', response.data.id);

            history.push('/profile');
        } catch (err){
            alert("Falha ao fazer o login, tente novamente!")
        }
        console.log(email, senha);
    }

    return (
        <div className="logon-container">
            <section className="form">

                <img src={logo} alt="Minhas tarefas" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                    required
                    value={email}
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)} />

                    <input
                    required   
                    type="password"     
                    value={senha}
                    placeholder="senha"
                    onChange={e => setSenha(e.target.value)} />

                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#0078E7"/>
                    Não tenho login
                </Link>
                </form>
            </section>
        </div>
    );
}