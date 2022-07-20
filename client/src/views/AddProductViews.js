import NavBar from "../components/NavBar";
import { useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
export default function AddProductViews() {

  const navigate = useNavigate()
  const [product_name, setProduct_name] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");

  async function addProduct(e){
    e.preventDefault();
    try {
      const data = {
        product_name,
        image,
        price,
        description,
        sku
      }
     await axios({
        method: "POST",
        url: `http://localhost:3000/products`,
        headers: {
          authorization: localStorage.getItem("Authorization"),
        },
        data: data
      });

     
      Swal.fire(
        'Good job!',
        'Data successfully added!',
        'success'
      )

      navigate('/shop')

    } catch (error) {
      if(error.response.status === 401){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Please login first",
        })

        setTimeout(() => {
          navigate('/login')
        }, 2500);
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Please login first",
      })
    }

  }
  return (
    <>
      <div className="container mx-auto p-5">
        <NavBar></NavBar>
      </div>

      <div className="container py-16 mx-auto">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden text-justify">
          <h2 className="text-2xl uppercase font-medium mb-3">Add new Product</h2>
          
          <form onSubmit={addProduct}>
            <div className="space-y-3">
              <div>
                <label for="Product Name" className="text-gray-600 mb-2 block">
                  Product Name
                </label>
                <input
                  type="text"
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
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"
                  placeholder="Enter new product SKU "
                ></input>
              </div>
            </div>

      

            <div className="mt-4">
              <button type="submit" className="block w-full py-2 text-center bg-red-500 text-white border border-red-500 rounded hover:bg-transparent hover:text-red-500 transition font-medium">
                SUBMIT
              </button>
            </div>
            
          
          </form>
        </div>
      </div>
    </>
  );
}
