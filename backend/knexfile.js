// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'controletarefa.cb8wpsrs2beg.us-east-2.rds.amazonaws.com',
      database: 'controletarefa',
      user:     'marquissantos',
      password: 'mm1234mm1234',
      timeout: 100000
    },

    migrations: {
      directory: './src/database/migrations'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
