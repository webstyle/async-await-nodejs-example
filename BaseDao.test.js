const {BaseDao} = require('./BaseDao');


test('BaseDao constructor', (done) => {
  const dao = new BaseDao();
  expect(dao).not.toBeNull();
  expect(dao).toBeDefined();
  expect(dao).not.toBeUndefined();
  expect(dao.client).not.toBeNull();
  expect(dao.client).not.toBeUndefined();
  expect(dao.run).not.toBeNull();
  expect(dao.run).not.toBeUndefined();

  done();
});


test('BaseDao run sql query', async (done) => {
  const dao = new BaseDao();
  const correctQuery = `SELECT * FROM tickets LIMIT 10`;
  const wrongQuery = `SELECT * FROM tickets123 L1IMIT 10`;

  expect(await dao.run(correctQuery)).not.toBeNull();
  done();
});