"use strict";
require("dotenv").config();
const Hapi = require("@hapi/hapi");
const hapiAuthJWT = require("./lib/");

const { comparePassword, hashPassword } = require("./helpers/bcrypt");
const { generateToken } = require("./helpers/jwt");
const db = require("./services/index");

// use the token as the 'authorization' header in requests
// const token = JWT.sign(people[1], secret); // synchronous
// console.log(token);
// bring your own validation function
const validate = async function (decoded, request, h) {
  const email = decoded.email;
  const findUser = await db.query(
    `SELECT * FROM Users WHERE email = '${email}'`
  );
  if (findUser) {
    return { isValid: true };
  } else {
    return { isValid: false };
  }
};

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  await server.register(hapiAuthJWT);
  // see: https://hapi.dev/api/#-serverauthschemename-scheme
  server.auth.strategy("jwt", "jwt", {
    key: process.env.SECRET_KEY,
    validate,
    verifyOptions: { ignoreExpiration: true },
  });

  server.auth.default("jwt");

  server.route([
    {
      method: "POST",
      path: "/register",
      config: { auth: false },
      handler: async (request, h) => {
        try {
          const { user_name, password, email } = request.payload;

          const hash = hashPassword(password);
          await db.query(`INSERT INTO Users(user_name, password, email)
          VALUES ('${user_name}', '${hash}', '${email}')`);
          return h.response("Account successfully created").code(201);
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      method: "POST",
      path: "/login",
      config: { auth: false },
      handler: async (request, h) => {
        try {
          const { email, password } = request.payload;
          const findUser = await db.query(
            `SELECT * FROM Users WHERE email = '${email}'`
          );
          if (findUser.length === 0) {
            return Boom.unauthorized(`Invalid email or password`);
          }
          const checkPassword = comparePassword(password, findUser[0].password);
          if (!checkPassword) {
            return Boom.unauthorized(`Invalid email or password`);
          }
          const payload = {
            id: findUser[0].id,
            email: findUser[0].email,
            user_name: findUser[0].user_name,
          };

          const access_token = generateToken(payload);

          return h
            .response({
              access_token: access_token,
              user_name: findUser[0].user_name,
            })
            .code(200);
        } catch (error) {
          console.log(error);
        }
      },
    },

    {
      method: "GET",
      path: "/products",
      config: { auth: false },
      handler: async (request, h) => {
        try {
          const query = request.query.limit
          if(query){
            const result = await db.query(
              `SELECT * FROM Products LIMIT ${query}`
            );
            return h.response(result).code(200);
          }
          const result = await db.query(
            "SELECT * FROM Products ORDER BY id DESC;"
          );
          return h.response(result).code(200);
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      method: "GET",
      path: "/products/{id}",
      config: { auth: false },
      handler: async (request, h) => {
        try {
          const id = request.params.id;
          const result = await db.query(
            `SELECT * FROM Products Where id = '${id}'`
          );
          return h.response(result[0]).code(200);
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
      method: ["PUT"],
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
      method: "DELETE",
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

          await db.query(`DELETE FROM Products WHERE id = '${id}'`);

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
