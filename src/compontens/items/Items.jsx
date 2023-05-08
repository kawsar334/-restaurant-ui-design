import { cartItems } from "../../data"
import "./item.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Items = () => {
    const { products } = useSelector((state) => state.products);
    const [data, setData] = useState(products)
    const handleCategory = (cat) => {
        if (cat === "all") {
            setData(products)
        } else {
            const items = products.filter((i) => i.cat === cat)
            setData(items)
        }
    }

    return (
        <div className="items" id="item">
            <h1 className="text-3xl ">Foods Items </h1>
            <div className="itemtop">
                <i className="fa-solid fa-magnifying-glass" ></i>
                <input type="text" placeholder='Search' />
            </div>
            <div className="itemmiddle">
                <ul>
                    <li onClick={() => handleCategory("all")}>All</li>
                    <li onClick={() => handleCategory("lunch")}>Lunch</li>
                    <li onClick={() => handleCategory("dinner")}>dinner</li>
                    <li onClick={() => handleCategory("breackfast")}>breackfast </li>
                    <li onClick={() => handleCategory("breackfast")}>Pizza</li>
                    <li onClick={() => handleCategory("breackfast")}>burger</li>
                    <li onClick={() => handleCategory("dinner")}>Soup</li>
                    <li onClick={() => handleCategory("lunch")}>fry</li>
                </ul>
            </div>
            <div className="itemcards">
                {data?.map((item) => (

                    <NavLink to={`/details/${item.id}`} className="card">
                        <div className="cardtop">
                            <img src={item.img} alt="Loading" />
                        </div>
                        <div className="cardbottom">
                            <p className="cardtitle">{item.title}</p>
                            <div className="stars">

                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div className="cardnames">
                                <span>belgium</span>
                                <span>france</span>
                            </div>
                            <span className="price">${item?.price}</span>
                        </div>
                    </NavLink>
                ))}

            </div>
        </div>
    )
}

export default Items