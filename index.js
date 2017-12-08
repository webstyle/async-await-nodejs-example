const TicketsDao = require('./TicketsDao');

class App {
  async main() {
    const dao = new TicketsDao();
    let [errorList, list] = await this.to(dao.getAll(100));
    if (errorList !== null) return console.error('Error list');

    let [errorTicket, ticket] = await this.to(dao.findOne(list[10].ticket_no));
    if (errorTicket) return console.error('Error ticket');

    console.log(ticket);
  }

  async to(promise) {
    return promise
      .then((response) => [null, response])
      .catch((error) => [error]);
  }
}

new App().main();