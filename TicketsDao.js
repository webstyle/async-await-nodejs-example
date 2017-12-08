const {BaseDao} = require('./BaseDao');

class TicketsDao extends BaseDao {
  constructor() {
    super();
  }

  async getAll(limit) {
    return this.run(`SELECT * FROM tickets LIMIT $1`, [limit])
  }

  async findOne(id) {
    return this.run(`SELECT * FROM tickets WHERE ticket_no=$1`, [id]);
  }
}

module.exports = TicketsDao;