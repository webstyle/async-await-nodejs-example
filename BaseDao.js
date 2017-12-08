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

  run(sql, params = []) {
    if (!sql) throw new Error("SQL query required");

    return new Promise((resolve, reject) => {
      this.client.query(sql, params).then(response => {
        return resolve(response.rows);
      }).catch(error => {
        return reject(error);
      })
    });
  }

}


module.exports.BaseDao = BaseDao;