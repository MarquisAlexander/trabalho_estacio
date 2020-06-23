import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api.js';

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

            history.push('/newtask');
        } catch (err){
            alert("Falha ao fazer o login, tente novamente!")
        }
        console.log(email, senha);
    }

    return (
        <div className="logon-container">
            <section>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                    value={email}
                    placeholder="id"
                    onChange={e => setEmail(e.target.value)} />

                    <input          
                    value={senha}
                    placeholder="id"
                    onChange={e => setSenha(e.target.value)} />

                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#fd7"/>
                    Não tenho login
                </Link>
                </form>
            </section>
        </div>
    );
}