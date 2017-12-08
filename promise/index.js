const TicketsDao = require('../TicketsDao');

class App {
  main() {
    const dao = new TicketsDao();

    dao.getAll(100)
      .then((response) => dao.findOne(response[0].ticket_no))
      .catch((error) => {
        console.log('Error, on TicketsDao.getAll(). Message '+ error.message);
      })
  }
}


new App().main();