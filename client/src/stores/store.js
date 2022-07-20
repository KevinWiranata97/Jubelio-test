import { makeAutoObservable} from "mobx";

export class Store {
  
products = []

  constructor() {
    makeAutoObservable(this);
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
