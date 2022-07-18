const pg = require("pg");
const config = {
  user: "postgres", //this is the db user credential
  database: "Jubelio",
  password: "postgres", //this is the db user credential
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("connected to the Database");
});

const createTables = () => {
  const userTable = `CREATE TABLE IF NOT EXISTS
        Users(
          id SERIAL PRIMARY KEY,
          user_name VARCHAR(128) NOT NULL,
          password VARCHAR(128) NOT NULL,
          email VARCHAR(128) NOT NULL
        )`;
  pool
    .query(userTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });


    const createUser = `INSERT INTO Users(user_name, password, email)
    VALUES ('Jubelio', '123456', 'jubelio@gmail.com')`;
pool
.query(createUser)
.then((res) => {
  console.log(res);
  pool.end();
})
.catch((err) => {
  console.log(err);
  pool.end();
});

  const productTable = `CREATE TABLE IF NOT EXISTS
    Products(
      id SERIAL PRIMARY KEY,
      product_name VARCHAR NOT NULL,
      SKU VARCHAR NOT NULL,
      image VARCHAR,
      price INTEGER NOT NULL,
      description VARCHAR
    )`;
  pool
    .query(productTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on("remove", () => {
  console.log("client removed");
  process.exit(0);
});

//export pool and createTables to be accessible  from an where within the application
module.exports = {
  createTables,
  pool,
};

require("make-runnable");
