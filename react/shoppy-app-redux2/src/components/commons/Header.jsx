import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { AuthContext } from "../../context/AuthContext.js";
import { useAuth } from "../../hooks/useAuth.js";

import { useSelector } from 'react-redux';

export function Header() {
    const {handleLogout} = useAuth();
    const {isLogin} = useContext(AuthContext);

    const cartCount = useSelector((state) => state.cart.cartCount);
    const cartList = useSelector((state) => state.cart.cartList);

    // console.log('cartList', cartList);
    
    // useEffect(() => {
    //     const loginInfo = localStorage.getItem("loginInfo");
    //     console.log('loginInfo', JSON.parse(loginInfo)); //문자열을 JSON 객체로 변환
    // }, []);
    
    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FiShoppingBag />
                    <span>Shoppy-redux2</span>
                </Link>
                <nav className="header-right">
                    <Link to="/all">Products</Link>
                    <Link to="/cart" className="header-icons-cart-link">
                        <LiaShoppingCartSolid className='header-icons' />
                        <span className="header-icons-cart">{cartCount}</span>
                    </Link>
                    {isLogin ?
                        <button type="button" onClick={handleLogout}>Logout</button>
                    :
                        <Link to="/login">
                            <button type="button">Login</button>
                        </Link>
                    }
                    <Link to="/signup">
                        <button type="button">Signup</button>
                    </Link>
                    {isLogin && 
                        <Link to="/support">
                            <button type="button">Support</button>
                        </Link>
                    }
                </nav>
            </div>
        </div>
    );
} 