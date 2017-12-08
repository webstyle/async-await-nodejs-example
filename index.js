const TicketsDao = require('./TicketsDao');

class App {
  async main() {
    const dao = new TicketsDao();
    try {
      let list = await dao.getAll(100);
      let ticket = await dao.findOne(list[10].ticket_no);
      console.log(ticket);
    } catch (error) {
      console.log('Error, on TicketsDao.getAll(). Message '+ error.message);
    }
  }
}

new App().main();