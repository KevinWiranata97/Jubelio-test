import { makeAutoObservable, observable, action} from "mobx";

export class Store {
  
products = []

  constructor() {
    makeAutoObservable(this,{
      products: observable,
      setProducts: action
    });

  }

  setProducts(products) {
    this.products = products;
  }

  fetchProduct() {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setProducts(data));
  }
  
}













