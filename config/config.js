const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } = require(".");

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      connectTimeout: 30000 // 30 seconds timeout to avoid ETIMEDOUT
    },
    pool: {
      max: 5,       // Maximum number of connections in pool
      min: 0,       // Minimum number of connections in pool
      acquire: 30000, // The maximum time (ms) to try getting a connection before throwing an error
      idle: 10000    // The maximum time (ms) a connection can be idle before being released
    },
    logging: false  // Optional: disable Sequelize SQL logs for cleaner output
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      connectTimeout: 30000
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  }
}
