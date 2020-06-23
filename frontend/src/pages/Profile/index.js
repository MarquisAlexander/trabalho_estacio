import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { FaCalendarCheck, FaCheck, FaInbox }from "react-icons/fa";

import api from '../../services/api';

import './styles.css';

export default function Profile() {
    const [task, setTask] = useState([]);


    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');

    const history = useHistory()

    useEffect(() => {
        api.get('screen_perfil', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setTask(response.data)
        })

    }, [userId])

    async function handleTerminarTarefa(id) {
        try{
            await api.delete(`tb_task/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });

        setTask(task.filter(task => task.id !== id));
        }catch(err) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    function handleBackProfile() {

        history.push('/suport');
    }

    return (
        <>
        <div className="profile-container">
            <header>
                <span> Bem vindo(a), {userName}</span>

                <Link className="button01" to="/task/new">Cadastrar nova tarefa</Link>
                <button onClick={handleLogout}type="button">
                    <FiPower size={18} color="#0078E7" />
                </button>
            </header>

            <h1>Tarefas encontradas</h1>

            <ul>
                {task.map(task => (
                    <li key={task.id}>
                    <strong>Tarefa:</strong>
                    <p>{task.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{task.description}</p>

                    <strong>Prioridade:</strong>
                    <p>{task.prioridade}</p>

                    <strong>Responsável:</strong>
                    <p>{task.responsavel}</p>

                    <button onClick={() => handleTerminarTarefa(task.id)}type="button">
                        <p></p>
                        <FaCheck size={40} color="#80C55F" />
                    </button>
                
                    <button onClick={() => handleTerminarTarefa(task.id)}type="button">
                        <p></p>
                        <FiTrash2 size={40} color="#DB3B3B" />
                    </button>
              
                </li>
                ))}
            </ul>
        </div>
        <div className="suportButton">
                    <button onClick={handleBackProfile}>
                    <FaInbox size={30} color="#0078E7" /> <p>Entre em contato com a nossa equipe</p>
                </button>
        </div>     
</>
    );
}