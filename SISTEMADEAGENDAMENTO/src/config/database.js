module.exports = {
    dialect: 'postgres',
    host: 'queenie.db.elephantsql.com',
    username: 'yobfmwkr',
    password: 'SJeBNzQBBe3Sy9Ranayvgcl0EIndl62s',
    database: 'yobfmwkr',
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