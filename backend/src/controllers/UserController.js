const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, senha } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('tb_users').insert({
            id,
            name,
            email,
            whatsapp,
            senha,
        })
    
        return response.json({ id });
    },
};