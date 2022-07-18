"use strict";

const Hapi = require("@hapi/hapi");
const Boom = require("@hapi/boom");
const db = require("./services/index");
const bcrypt = require("bcryptjs");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route([
    {
      method: "POST",
      path: "/register",
      handler: async (request, h) => {
        try {
          const { user_name, password, email } = request.payload;
          const hash = await bcrypt.hash(password, 10);
          await db.query(`INSERT INTO Users(user_name, password, email)
          VALUES ('${user_name}', '${hash}', '${{email}}')`);
          return h.response("Account successfully created").code(201);
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
          const result = await db.query("SELECT * FROM Products")
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
          const { product_name, image, sku, price, description } =
            request.payload;
          await db.query(`INSERT INTO Products(product_name, image, SKU, price, description)
          values ('${product_name}', '${image}', '${sku}', '${price}', '${description}')`);
          return h.response("data successfully added").code(201);
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      method: ["PUT", "GET"],
      path: "/products/{id}",
      handler: async (request, h) => {
        try {
          const id = request.params.id;

          const { product_name, image, sku, price, description } =
            request.payload;
          const findProduct = await db.query(
            `SELECT * FROM Products Where id = '${id}'`
          );
          if (findProduct.length === 0) {
            return Boom.notFound(`Product with id ${id} not found`);
          }

          await db.query(
            `UPDATE Products SET product_name = '${product_name}', image = '${image}', sku = '${sku}', price = '${price}', description = '${description}' WHERE id = '${id}'`
          );

          return h.response("data successfully updated").code(200);
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      method: 'DELETE',
      path: "/products/{id}",
      handler: async (request, h) => {
        try {
          const id = request.params.id;
          
          const findProduct = await db.query(
            `SELECT * FROM Products Where id = '${id}'`
          );
          if (findProduct.length === 0) {
            return Boom.notFound(`Product with id ${id} not found`);
          }

          await db.query(
            `DELETE FROM Products WHERE id = '${id}'`
          );

          return h.response("data successfully deleted").code(200);
        } catch (error) {
          console.log(error);
        }
      },
    },

  ]);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init();
