import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import "./nav.scss";

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const location = useLocation().pathname ;
    const totalquantity = useSelector((state) => state.cart.totalquantity);
    
    
    return (
        <div className='navbarcontainer bg-gray-500 '>
            <div className="navwrapper flex  ">
                <div className="navleft">
                    <NavLink to="/" className='navlogo '>
                        <img src="https://themearth.com/demo/html/restaura/view/assets/img/logo2.png" alt="Logo" />
                    </NavLink>
                </div>
                {/* <div className="navmiddle">
                    <i className="fa-solid fa-magnifying-glass" ></i>
                    <input type="text" placeholder='Search' />
                </div> */}
                {!nav ? <i className="fa-solid fa-bars cursor-pointer" onClick={() => setNav(!nav)}></i> :
                    <i class="fa-solid fa-xmark cursor-pointer mx-2" onClick={() => setNav(!nav)}></i>}
                {nav && <div className="navright">
                    <ul>
                        {location === "/" && <li ><a href="#item" >products</a></li>}
                        <li ><NavLink to="/login" >Signin</NavLink></li>
                        <li ><NavLink to="#about">about us</NavLink></li>
                        <li ><NavLink to="/register" >signup</NavLink></li>
                        <li ><NavLink to="#about" >Contact us</NavLink></li>
                        <li >
                            <NavLink to="/cart" className='cart m-3 ' >
                                <i className="fa-solid fa-cart-shopping "></i>
                                <span style={{color:"crimson"}}>{totalquantity}</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default Navbar



