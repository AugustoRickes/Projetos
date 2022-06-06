module.exports = {
   //aqui voce coloca os dados do seu servidor
    dialect: 'postgres',
    host: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    username: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    password: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
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