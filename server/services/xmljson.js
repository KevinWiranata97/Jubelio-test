const axios = require("axios");
const xml2js = require("xml2js");
const fs = require("fs");
async function getData() {
  try {
    let productNumbers = [];
    const response = await axios({
      url: `http://api.elevenia.co.id/rest/prodservices/product/listing?page=2`,
      headers: {
        openapikey: "721407f393e84a28593374cc2b347a98",
      },
    });
    const xml = `${response.data}`;

    xml2js.parseString(xml, (err, result) => {
      if (err) {
        throw err;
      }

      // `result` is a JavaScript object
      // convert it to a JSON string
      const json = JSON.stringify(result, null, 4);
      const parsed = JSON.parse(json);

      // log JSON string

      const products = parsed.Products.product;

      products.map((product, i) => {
        data = {
          productNumber: product.prdNo[0],
        };

        productNumbers.push(data.productNumber);
        return data;
      });

    
    });
    let dataProducts = [];
    for (let i = 0; i < productNumbers.length; i++) {
      const response1 = await axios({
        url: `http://api.elevenia.co.id/rest/prodservices/product/details/${productNumbers[i]}`,
        headers: {
          openapikey: "721407f393e84a28593374cc2b347a98",
        },
      });
      const xml = `${response1.data}`;

      xml2js.parseString(xml, (err, result) => {
        if (err) {
          throw err;
        }

        // `result` is a JavaScript object
        // convert it to a JSON string
        const json = JSON.stringify(result, null, 4);
        const parsed = JSON.parse(json);

        let data = parsed.Product;
        let final = {
          product_name: data.prdNm[0],
          image: [data.prdImage01, data.prdImage02, data.prdImage03],
          SKU: data.sellerPrdCd[0] + data.prdNo[0],
          price: +data.selPrc[0],
          description: data.htmlDetail[0],
        };

        dataProducts.push(final);

        fs.writeFileSync(
          "products.json",
          JSON.stringify(dataProducts, null, 4)
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
}

getData();
