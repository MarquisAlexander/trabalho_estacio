const connection = require('../database/connection');

module.exports = {

    async create(request, response) {
        const {title, description, priority, responsavel } = request.body;
        const user_id = request.headers.authorization;

        await connection('tb_task').insert({
            title,
            description,
            priority,
            responsavel,
            user_id,
        }); 

        response.json("tudo ok")
    },

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const task = await connection('tb_task')
        .where('id', id)
        .select('user_id')
        .first();

        if( task.user_id != user_id) {
            return response.status(401).json({error: 'Você não tem permissão para isso'});
        }

        await connection('tb_task').where('id', id).delete();

        return response.status(204).json({Mensagem: 'Tarefa excluida'});
    },

    async index(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const task = await connection('tb_task')
        .where('id', id)
        .select('user_id')
        .first();

        if( task.user_id != user_id) {
            return response.status(401).json({error: 'Você não tem permissão para isso'});
        }

        await connection('tb_task').where('id', id).delete();

        return response.status(204).json({Mensagem: 'Tarefa excluida'});
    }
};