import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { LiaShoppingCartSolid } from "react-icons/lia";

export function Header({cartCount}) {
    // useEffect(() => {
    //     const loginInfo = localStorage.getItem("loginInfo");
    //     console.log('loginInfo', JSON.parse(loginInfo)); //문자열을 JSON 객체로 변환
    // }, []);
    
    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className="header-right">
                    <Link to="/all">Products</Link>
                    <Link to="/cart" className="header-icons-cart-link">
                        <LiaShoppingCartSolid className='header-icons' />
                        <span className="header-icons-cart">{cartCount}</span>
                    </Link>
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button type="button">Signup</button>
                    </Link>
                    <Link to="/support">
                        <button type="button">Support</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
} 