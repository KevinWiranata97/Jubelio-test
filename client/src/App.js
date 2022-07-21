import HomeViews from './views/HomeViews.js';
import DetailViews from './views/DetailViews.js';
import ShoppingViews from './views/ShoppingView.js';
import LoginViews from './views/LoginViews.js';
import RegisterViews from './views/RegisterViews.js';

import Modal from './components/Modal.js';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<HomeViews />} />
        <Route path="/details/:id" element={<DetailViews />} />
        <Route path="/shop" element={<ShoppingViews />} />
        <Route path="/login" element={<LoginViews />} />
        <Route path="/register" element={<RegisterViews />} />
        <Route path="/products/edit" element={<Modal />} />
      </Routes>
    </div>
  );
}


export default App;
