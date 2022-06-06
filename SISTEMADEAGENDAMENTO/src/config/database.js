module.exports = {
   //aqui voce coloca os dados do ElephantSQL tiny turtle free
    dialect: 'postgres',
    host: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    username: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    password: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
    database: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
    sslmode: "required",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
}