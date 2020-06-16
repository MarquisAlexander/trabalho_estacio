import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api.js';

export default function Logon() {
    const [id, setId] = useState();

    const history = useHistory();


    async function login(e) {
        e.preventDefault();

        try {
            const response = api.post("sessions", {id});

            localStorage.setItem('userId', id);
            localStorage.setItem('userName', response.data.name);

            history.push('/register');
        } catch (err){
            alert("Falha ao fazer o login, tente novamente!")
        }
        // console.log(id);
    }

    return (
        <div className="logon-container">
            <section>
                <form onSubmit={login}>
                    <h1>Faça seu logon</h1>
                    <input
                    maxLength="8"
                    value={id}
                    placeholder="id"
                    onChange={e => setId(e.target.value)} />

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