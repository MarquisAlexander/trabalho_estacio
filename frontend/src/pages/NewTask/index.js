import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api.js';

import './styles.css';

export default function NewTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [responsavel, setResponsavel] = useState('');

    const history = useHistory();

    const  userId = localStorage.getItem('userId');

    async function handleNewTask(e) {
        e.preventDefault();
        
        const data = {
            title,
            description,
            priority,
            responsavel,
        };
        console.log(data);
        try{ 
            await api.post('tb_task', data, {
                headers: {
                    Authorization: userId,
                }
            })

            history.push('/register');
        }catch{
            alert('erro ao cadastrar caso, tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>

                    <h1>Cadastrar novas tarefas</h1>
                    <p>Descreva a tarefa detalhadamente para uma melhor compreensão no futuro</p>
                    
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#0078E7"/>
                        Voltar para a Home
                    </Link>
                </section>

                <form onSubmit={handleNewTask}>
                    <input 
                        placeholder="Título da tarefa"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input 
                        placeholder="Responsável pela tarefa"
                        value={responsavel}
                        onChange={e => setResponsavel(e.target.value)}
                    />

                    <p> 
                        Para finalizar a criação da tarefa, defina qual
                        é a sua prioridade.
                    </p>

                        <button className="buttonPrioridadeBaixa" type="submit" value={'Baixa'}
                        onClick={e => setPriority(e.target.value)}
                        >Baixa</button>

                        <button className="buttonPrioridadeMedia" type="submit" value={'Média'} margin-left="11"
                        onClick={e => setPriority(e.target.value)}
                        >Média</button>

                        <button className="buttonPrioridadeAlta" type="submit" value={'Alta'}
                        onClick={e => setPriority(e.target.value)}
                        >Alta</button>
     
                </form>          
            </div>
        </div>
    );
}