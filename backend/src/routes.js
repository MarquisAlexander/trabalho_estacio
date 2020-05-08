const express = require('express');

const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router('controletarefa.cb8wpsrs2beg.us-east-2.rds.amazonaws.com');

routes.post('/sessions', SessionController.create);

//rota para listagem das tb_users cadastradas
routes.get('/tb_users', UserController.index);
//rota para cadastro de tb_users
routes.post('/tb_users', UserController.create);

routes.get('/profile', ProfileController.index);

routes.get('/tb_task',TaskController.index );
routes.post('/tb_task',TaskController.create );
routes.delete('/tb_task/:id', TaskController.delete);


module.exports = routes;