const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        logging: false,
    });
} else if (process.env.DB_DIALECT === 'postgres') {
    sequelize = new Sequelize(
        process.env.DB_NAME || 'cards_test',
        process.env.DB_USER || 'test_user',
        process.env.DB_PASS || 'test_password',
        {
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 5432,
            dialect: 'postgres',
            logging: false,
        }
    );
} else {
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: process.env.DB_STORAGE || './database.sqlite',
        logging: false,
    });
}

module.exports = sequelize;