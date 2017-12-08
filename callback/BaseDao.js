const {Client} = require('pg');

class BaseDao {
  constructor() {
    const client = new Client({
      user: process.env.PG_USER,
      host: 'localhost',
      database: process.env.PG_DB,
      password: process.env.PG_PASSWORD,
      port: 5432,
    });
    client.connect();
    this.client = client;
  }

  run(sql, params, callback) {
    if (!sql) return callback(new Error("SQL query required"));
    this.client.query(sql, params, (err, result) => {
      if (err) return callback(err);
      callback(null, result.rows);
    })
  }
}

module.exports.BaseDao = BaseDao;