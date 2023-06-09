import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import About from "../../compontens/about/About"
import Foote from "../../compontens/footer/Foote"
import Navbar from "../../compontens/navbar/Navbar"
import "./details.scss"

const Details = () => {

    const product = useSelector((state) => state.products.product);
    const  id = useLocation().pathname.split("/")[2]
    const dispatch = useDispatch();
   const [quantity, setQuantity] = useState(1);

    useEffect(()=>{
        dispatch({type:"PRODUCT_DETAILS", payload:id});

    },[id])

    
    return (
        <div className="details">
            <Navbar />

            <div className="detailswrapper">
                <div className="detailsleft">
                    <img src={product?.img} alt="Loading..." />
                    <p>{product?.desc}!</p>
                    <a href="/">Continue shopping</a>
                </div>
                <div className="detailsright">
                    <h1>{product?.title}</h1>
                    <span className="price">${product?.price}</span>
                    <div className="counter">
                        {<button disabled={quantity<1} onClick={()=>setQuantity(quantity-1)}>-</button>}
                        <button>{quantity}</button>
                        <button onClick={()=>setQuantity(quantity+1)}>+</button>
                    </div>

                    <p>{product?.desc}</p>

                    <button onClick={()=>{
                        dispatch({type:"ADD_TO_CART", payload:{quantity, product}})
                    }}>Add to card</button>
                </div>
            </div>

            {/* <About /> */}

            <Foote />
        </div>
    )
}

export default Details