const express = require('express');

const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const PerfilController = require('./controllers/PerfilController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/screen_perfil', PerfilController.index);

//rota para cadastro de tb_users
routes.post('/tb_users', UserController.create);

routes.post('/tb_task',TaskController.create);
routes.delete('/tb_task/:id', TaskController.delete);
routes.post('/tb_task/:id', TaskController.index);

module.exports = routes;