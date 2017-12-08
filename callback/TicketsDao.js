const {BaseDao} = require('./BaseDao');

class TicketsDao extends BaseDao {
  constructor() {
    super();
  }

  getAll(limit, callback) {
    this.run(`SELECT * FROM tickets LIMIT $1`, [limit], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  }

  findOne(ticket_no, callback) {
    this.run(`SELECT * FROM tickets WHERE ticket_no = $1`, [ticket_no], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  }
}

module.exports.TicketsDao = TicketsDao;
