const express = require('express');

const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const PerfilController = require('./controllers/PerfilController');

const routes = express.Router();

routes.get('/screen_perfil', PerfilController.index);

//rota para cadastro de tb_users
routes.post('/tb_users', UserController.create);

routes.post('/tb_task',TaskController.create );

module.exports = routes;