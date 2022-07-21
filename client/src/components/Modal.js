import React from "react";
import { useState } from "react";


export default function Modal({style, buttonName, method}) {
 

  const [showModal, setShowModal] = React.useState(false);
  const [product_name, setProduct_name] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  
  const payload = {
      product_name,
      image,
      price,
      description,
      sku
  }


  function submitHandler(e){
    e.preventDefault();
    method(payload)
    setShowModal(false);
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }
  return (
    <>
      <button
        className={style}
        type="button"
        onClick={() => setShowModal(true)}
      >
        {buttonName}
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
        <div className="container py-16 mx-auto">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden text-justify bg-white">
          <h2 className="text-2xl uppercase font-medium mb-3">Add new Product</h2>
          
          <form onSubmit={submitHandler}>
            <div className="space-y-3">
              <div>
                <label for="Product Name" className="text-gray-600 mb-2 block">
                  Product Name
                </label>
                <input
                  type="text"
                  id="product_name"
                  value={product_name}
                  onChange={(e) => setProduct_name(e.target.value)}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded  focus:border-red-500"
                  placeholder="Enter new Product name"
                ></input>
              </div>
              <div>
                <label for="Product image" className="text-gray-600 mb-2 block">
                  Product image
                </label>
                <input
                  type="url"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded  focus:border-red-500"
                  placeholder="Enter your image url"
                ></input>
              </div>
              <div>
                <label for="description" className="text-gray-600 mb-2 block">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"
                  placeholder="Enter new product Description"
                ></input>
              </div>
              <div>
                <label for="price" className="text-gray-600 mb-2 block">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"
                  placeholder="Enter new product price "
                ></input>
              </div>
              <div>
                <label for="SKU" className="text-gray-600 mb-2 block">
                    SKU
                </label>
                <input
                  type="text"
                  id="sku"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"
                  placeholder="Enter new product SKU "
                ></input>
              </div>
            </div>

      

            <div className="mt-4">
              <button  type="submit" className="block w-full py-2 text-center bg-red-500 text-white border border-red-500 rounded hover:bg-transparent hover:text-red-500 transition font-medium">
                SUBMIT
              </button>
            </div>
            <div className="mt-4">
              <button type="submit" className="block w-full py-2 text-center bg-blue-500 text-white border border-red-500 rounded hover:bg-transparent hover:text-red-500 transition font-medium"  onClick={() => setShowModal(false)}>
                CANCEL
              </button>
            </div>
          
          
          </form>
        </div>
      </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}