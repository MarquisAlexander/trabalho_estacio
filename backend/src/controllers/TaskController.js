const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1} = request.query;

        const [ count ] = await connection('tb_task').count();

        const tb_task = await connection('tb_task')
        .join('tb_users', 'users.id', '=', 'tb_task.user_id')
        .limit(5)
        .offset((page -1) * 5)
        .select([
            'tb_task.*',
            'tb_users.name',
            'tb_users.email',
            'tb_users.whatsapp',
        ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(tb_task);
    },

    async create(request, response) {
        const {title, description, priority, responsavel } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('tb_task').insert({
            title,
            description,
            priority,
            responsavel,
            user_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const task = await connection('tb_task')
            .where('id', id)
            .select('user_id')
            .first();

            if (task.user_id != user_id) {
                return response.status(401).json({error: 'Você não tem permissão para isso'});
            }

            await connection('tb_task').where('id', id). delete();

            return response.status(204).send();
    }
};