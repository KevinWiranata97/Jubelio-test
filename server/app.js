"use strict";

const Hapi = require("@hapi/hapi");
const db = require("./services/index");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route([
    {
      method: "GET",
      path: "/",
      handler: async (request, h) => {
        try {
          const result = await db.query("SELECT * FROM Users");
          return h.response(result).code(200);
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      method: "GET",
      path: "/products",
      handler: async (request, h) => {
        try {
          const result = await db.query("SELECT * FROM Products");
          return h.response(result).code(200);
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      method: "POST",
      path: "/products",
      handler: async (request, h) => {
        try {
          const { product_name, image, sku, price, description } = request.payload;
          await db.query(`INSERT INTO Products(product_name, image, SKU, price, description)
          values ('${product_name}', '${image}', '${sku}', '${price}', '${description}')`);
          return h.response("data successfully added").code(201);
        } catch (error) {
          console.log(error);
        }
      },
    },
  ]);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
