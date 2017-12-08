const {TicketsDao} = require('./TicketsDao');

class App {
  main() {
    const dao = new TicketsDao();
    dao.getAll(100, (err, response) => {
      if (err) return console.log('error');

      dao.findOne(response[0].ticket_no, (err, ticket) => {
        if (err) return console.log('error');
        console.log(ticket);
      })
    });
  }
}

new App().main();