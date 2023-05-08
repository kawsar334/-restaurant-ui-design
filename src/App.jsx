
import { useState } from "react";
import  {Routes, Route  } from "react-router-dom"
import Navbar from "./compontens/navbar/Navbar";
import Home from "./pages/home/Home";
import "./global.scss"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";


function App() { 
  const [active, setActive] = useState(false);

  return ( 
    <div className="app">
      <Routes>
        <Route path="/" element={<Home active={active} setActive={setActive} />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart/" element={<Cart />} />

        

      </Routes>
   
    </div>
  );
}

export default App;
