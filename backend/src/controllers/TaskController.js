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
};