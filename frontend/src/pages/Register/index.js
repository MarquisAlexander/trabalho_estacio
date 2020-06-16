import React, { useState } from 'react';

export default function Register() {

    const [name, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')

    async function Register(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp
        };

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

                <button className="button" type="submit">Cadastrar</button>
                
            </form>
        </div>
    </div>
    );
}