import Modal from "./Modal";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
export default function NavBar() {
const navigate = useNavigate()
async function addProduct(payload){

  try {
   
   await axios({
      method: "POST",
      url: `http://localhost:3000/products`,
      headers: {
        authorization: localStorage.getItem("Authorization"),
      },
      data: payload
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

  
  if (localStorage.getItem("Authorization")) {
    return (
      <div class="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
        <div class="flex flex-row justify-center">
          <div class="bg-gradient-to-r from-blue-400 to-white-400 w-10 h-10 rounded-lg"></div>
          <h1 class="text-3xl text-gray-600 ml-2">Logo</h1>
        </div>
        <div class="mt-2">
          <a
            href="/"
            class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
          >
            Home
          </a>
          <a
            href="/shop"
            class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
          >
            Shop
          </a>
          { (
              <Modal
                style={"text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"}
                buttonName={"Add Product"}
                method={addProduct}
              />
            )}
          <a
            href="/"
            class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
          >
            Welcome {localStorage.getItem("username")}
          </a>
          <a
            href="a.com"
            class="bg-blue-600 text-gray-50 hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-6 sm:w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart (0)
          </a>
        </div>
      </div>
    );
  }
  return (
    <div class="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
    <div class="flex flex-row justify-center">
      <div class="bg-gradient-to-r from-blue-400 to-white-400 w-10 h-10 rounded-lg"></div>
      <h1 class="text-3xl text-gray-600 ml-2">Logo</h1>
    </div>
    <div class="mt-2">
      <a
        href="/"
        class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
      >
        Home
      </a>
      <a
        href="/shop"
        class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
      >
        Shop
      </a>
      <a
        href="/products/add"
        class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
      >
        Add New Product
      </a>
      <a
        href="/login"
        class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
      >
       Login/Register
      </a>
      <a
        href="a.com"
        class="bg-blue-600 text-gray-50 hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 sm:h-6 sm:w-6 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Cart (0)
      </a>
    </div>
  </div>
);
}
