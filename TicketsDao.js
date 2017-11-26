const {BaseDao} = require('./BaseDao');

class TicketsDao extends BaseDao {
  constructor() {
    super();
  }

  async getAll() {
    return this.run(`SELECT * FROM tickets LIMIT 100`)
  }
}

module.exports = TicketsDao;