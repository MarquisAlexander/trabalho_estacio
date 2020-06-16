const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const user = await connection ('tb_users')
        .where('id', id)
        .select('name')
        .first();

        if(!user) {
            return response.status(400).json({error: "Nenhum usuário foi encotrado com esse id" });

        }

        return response.json(user);
    }


}