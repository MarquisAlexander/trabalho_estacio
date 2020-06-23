const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { email, senha } = request.body;

        const user = await connection ('tb_users')
        .where('email', email)
        .where('senha', senha)
        .select('name')
        .select('id')
        .first();

        if(!user) {
            return response.status(400).json({error: "Nenhum usuário foi encotrado com esse id" });

        }

        return response.json(user);
    }


}