import { makeAutoObservable, observable, action } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";

export class Store {
  products = [];
  productById = [];
  productRec = []

  constructor() {
    makeAutoObservable(this, {
      products: observable,
      setProducts: action,
    });
  }

  setProducts(products) {
    this.products = products;
  }

  setProductsById(products) {
    this.productById = products;
  }

  setProductsRec(products) {
    this.productRec = products;
  }


  fetchProduct() {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setProducts(data));
  }

  fetchProductById(id) {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => this.setProductsById(data));
  }

  async editDetails(payload, id, navigate) {
    try {
      console.log(payload, id);
      await axios({
        method: "PUT",
        url: `http://localhost:3000/products/${id}`,
        headers: {
          authorization: localStorage.getItem("Authorization"),
        },
        data: payload,
      });

      Swal.fire("Good job!", "Data successfully edited!", "success");
      
      setTimeout(() => {
        window.location.reload()
      }, 1500);
    
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
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
      })
    }
  }

  async deleteProduct(id,navigate) {

    try {
  
      await axios({
        method: "DELETE",
        url: `http://localhost:3000/products/${id}`,
        headers: {
          authorization: localStorage.getItem("Authorization"),
        }
      });
      Swal.fire(
        'Good job!',
        'Data successfully edited!',
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
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
      })
    }
  }
}
