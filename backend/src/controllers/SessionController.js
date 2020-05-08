const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const user = await connection('tb_users')
        .where('id', id)
        .select('name')
        .first();

        if (!user) {
            return response.status(400).json({ error: 'Nenhum usuário encontrado com este ID' });
        }

        return response.json(user);
    }
}