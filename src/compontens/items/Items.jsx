import { cartItems } from "../../data"
import "./item.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Items = () => {
    const { products } = useSelector((state) => state.products);
    const [data, setData] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerpage = 8;
    const lastIndex =currentPage * recordPerpage;
    const firstIndex = lastIndex - recordPerpage;
    const records = data.slice(firstIndex, lastIndex);
    const nPages = Math.ceil(data.length / recordPerpage);
    const numbers = [...Array(nPages).keys()].slice(1)
     
    const handleCategory = (cat) => {
        if (cat === "all") {
            setData(products);
        } else {
            const items = products.filter((i) => i.cat === cat)
            setData(items)
        }
    }

    // handling next page functionality
    const handlePrev = ()=>{
        if(currentPage >0){
            setCurrentPage(currentPage -1)
        }
    }

    // handling next functionality 
    const handleNext = ()=>{
        if(currentPage  !== lastIndex){
            setCurrentPage(currentPage +1)
        }
    }
    // handling CurrentPage functionality
    const handleCurrentPage = (i)=>{
        setCurrentPage(i)
    }

    return (
        <div className="items" id="item">
            <h1 className="text-3xl ">Foods Items </h1>
            <div className="itemtop">
                <i className="fa-solid fa-magnifying-glass" ></i>
                <input type="text" placeholder='Search' />
            </div>
            {/* <div className="itemmiddle">
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
            </div> */}
            <div className="itemcards">
                {records?.map((item) => (

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
            <div className="pagination">
                <button disabled={currentPage ===1} className="prev" onClick={handlePrev}>Prev</button>
                {numbers.map((i)=>(
                    <span key={i} className={`${i===currentPage && "active"}`} onClick={()=>handleCurrentPage(i)}>{i}</span>

                ))}
                <button className="next" disabled={currentPage===3} onClick={handleNext}>next</button>
            </div>
        </div>
    )
}

export default Items