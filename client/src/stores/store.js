import { makeAutoObservable, observable, action} from "mobx";

export class Store {
  
products = []

  constructor() {
    makeAutoObservable(this,{
      products: observable,
      setProducts: action
    });
  fetchProducts()
  }

  setProducts(products) {
    this.products = products;
  }
}

const store = new Store();


function fetchProducts() {
  fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => store.setProducts(data));
}


export default store;
