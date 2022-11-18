const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;
// const { DB_USER = process.env.DB_USER, DB_PASSWORD = process.env.DB_PASSWORD, DB_NAME = process.env.DB_NAME, DB_HOST = process.env.DB_HOST, DB_PORT = process.env.DB_PORT } = process.env;
// process.env.development = local
// process.env.test = local (tp utk test => jadi DB nya khusus test)
// process.env.production = server => setelah di deploy

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
};
