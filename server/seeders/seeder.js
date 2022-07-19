const {pool} = require('../services/db');
const fs = require('fs');
const dataProducts = JSON.parse(fs.readFileSync('../datas/products.json','utf-8'))


let data = dataProducts.map(el =>{
    let string = `('${el.product_name}', '${el.image}', '${el.sku}', '${el.price}', '${el.description}')`;
    return string
})
console.log(data);

const createProduct = `INSERT INTO Products(product_name, image, SKU, price, description)
values ${data}`;

    pool.query(createProduct,(err,res) =>{
        if(err){
            console.log(err);
        } else{
            console.log('berhasil seeding');
        }
    })