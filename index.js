const TicketsDao = require('./TicketsDao');

class App {
  async main() {
    const dao = new TicketsDao();
    try {
      let list = await dao.getAll();
      console.log(list);
    } catch (error) {
      console.log('Error, on TicketsDao.getAll(). Message '+ error.message);
    }

  }
}

new App().main();