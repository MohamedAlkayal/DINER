import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Classic Burger", price: 9.99, category_id: 1, inCart: false, countInCart: 1 },
    { id: 2, name: "Cheeseburger", price: 10.99, category_id: 1, inCart: false, countInCart: 1 },
    { id: 3, name: "Bacon Burger", price: 11.99, category_id: 1, inCart: false, countInCart: 1 },
    { id: 4, name: "Veggie Burger", price: 8.99, category_id: 1, inCart: false, countInCart: 1 },
    { id: 5, name: "French Fries", price: 3.99, category_id: 2, inCart: false, countInCart: 1 },
    { id: 6, name: "Onion Rings", price: 4.99, category_id: 2, inCart: false, countInCart: 1 },
    { id: 7, name: "Milkshake", price: 5.99, category_id: 3, inCart: false, countInCart: 1 },
    { id: 8, name: "Soft Drink", price: 1.99, category_id: 3, inCart: false, countInCart: 1 },
    { id: 9, name: "Double Cheeseburger", price: 12.99, category_id: 1, inCart: false, countInCart: 1 },
    { id: 10, name: "BBQ Burger", price: 11.49, category_id: 1, inCart: false, countInCart: 1 },
    { id: 11, name: "Chicken Burger", price: 10.99, category_id: 1, inCart: false, countInCart: 1 },
    { id: 12, name: "Turkey Burger", price: 9.49, category_id: 1, inCart: false, countInCart: 1 },
    { id: 13, name: "Sweet Potato Fries", price: 5.49, category_id: 2, inCart: false, countInCart: 1 },
    { id: 14, name: "Loaded Fries", price: 6.99, category_id: 2, inCart: false, countInCart: 1 },
    { id: 15, name: "Garlic Fries", price: 4.49, category_id: 2, inCart: false, countInCart: 1 },
    { id: 16, name: "Iced Tea", price: 2.49, category_id: 3, inCart: false, countInCart: 1 },
    { id: 17, name: "Lemonade", price: 3.49, category_id: 3, inCart: false, countInCart: 1 },
    { id: 18, name: "Root Beer", price: 2.99, category_id: 3, inCart: false, countInCart: 1 },
    { id: 19, name: "Buffalo Chicken Sandwich", price: 11.99, category_id: 1, inCart: false, countInCart: 1 },
    { id: 20, name: "Fish Burger", price: 10.99, category_id: 1, inCart: false, countInCart: 1 },
    { id: 21, name: "Grilled Cheese", price: 7.99, category_id: 1, inCart: false, countInCart: 1 },
    { id: 22, name: "Sweet Tea", price: 2.99, category_id: 3, inCart: false, countInCart: 1 },
    { id: 23, name: "Mocha Milkshake", price: 6.49, category_id: 3, inCart: false, countInCart: 1 },
    { id: 24, name: "Vanilla Milkshake", price: 5.49, category_id: 3, inCart: false, countInCart: 1 },
    { id: 25, name: "Chocolate Milkshake", price: 5.49, category_id: 3, inCart: false, countInCart: 1 },
    { id: 26, name: "Coca-Cola", price: 1.99, category_id: 3, inCart: false, countInCart: 1 },
    { id: 27, name: "Sprite", price: 1.99, category_id: 3, inCart: false, countInCart: 1 },
    { id: 28, name: "Dr. Pepper", price: 1.99, category_id: 3, inCart: false, countInCart: 1 },
    { id: 29, name: "Chicken Tenders", price: 8.99, category_id: 2, inCart: false, countInCart: 1 },
    { id: 30, name: "Side Salad", price: 4.99, category_id: 2, inCart: false, countInCart: 1 },
  ]);

  const categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Burgers" },
    { id: 2, name: "Sides" },
    { id: 3, name: "Drinks" },
  ];

  const addToCart = function (product_ID) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === product_ID);
    newProducts[index] = { ...newProducts[index] };
    newProducts[index].inCart = !newProducts[index].inCart;
    setProducts(newProducts);
  };

  const handelPlus = (product_ID) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === product_ID);
    newProducts[index] = { ...newProducts[index] };
    newProducts[index].countInCart = newProducts[index].countInCart + 1;
    setProducts(newProducts);
  };

  const handelMinus = (product_ID) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === product_ID);
    newProducts[index] = { ...newProducts[index] };
    if (newProducts[index].countInCart > 0) {
      newProducts[index].countInCart = newProducts[index].countInCart - 1;
    }
    setProducts(newProducts);
  };

  const handelReset = function () {
    let newProducts = [...products];
    newProducts = newProducts.map((p) => ({ ...p, countInCart: 0 }));
    setProducts(newProducts);
  };

  return (
    <BrowserRouter>
      <NavBar products={products} />
      <Routes>
        <Route path={"/"} element={<Home addToCart={addToCart} products={products} categories={categories} />} />
        <Route path={"/:id"} element={<ProductDetails addToCart={addToCart} products={products} categories={categories} />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/cart"} element={<Cart products={products} addToCart={addToCart} handelReset={handelReset} handelPlus={handelPlus} handelMinus={handelMinus} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
