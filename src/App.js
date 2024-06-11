import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";
import Category from "./pages/CategoryPage/Category";
import './style.css'
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getCategories } from "./redux/reduser";

function App() {

const Dispatch = useDispatch();

useEffect(()=> {
  Dispatch(getCategories())
},[])

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

