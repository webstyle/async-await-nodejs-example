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

  async run(sql, params = []) {
    if (!sql) throw new Error("SQL query required");
    let response = await this.client.query(sql, params);
    return response.rows;
  }

}


module.exports.BaseDao = BaseDao;