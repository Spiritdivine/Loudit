import { IoGridOutline } from "react-icons/io5";


const NavSpace = () => {
    return ( 
        <div className="extension">
            <ul className="list">
                <li className="bluelist"><a href="#"><IoGridOutline style={{fontSize:'1.5em'}} />Categories</a></li>
                <li className="bluelist"><a href="#">Phone & Tablets</a></li>
                <li className="bluelist"><a href="#">Computing</a></li>
                <li className="bluelist"><a href="#">Health & Beauty</a></li>
                <li className="bluelist"><a href="#">Home & Office</a></li>
                <li className="bluelist"><a href="#">Electronics</a></li>
                <li className="bluelist"><a href="#">Fashion</a></li>
                <li className="bluelist"><a href="#">Gaming</a></li>
                <li className="bluelist"><a href="#">Automobile</a></li>
            </ul>
        </div>
     );
}
 
export default NavSpace;