import React, {useRef, useState, useEffect} from 'react'
import '../styles/navbar.css';
import {Link} from 'react-router-dom';
import { useGlobalContext } from '../context';
import { navbarData } from '../Data/navbarData';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [show, setShow] = useState(false);
    const linksRefContainer = useRef(null);
    const linksRef = useRef(null);
    const {amount} = useGlobalContext();

    const showLinks = () => {        
        const linksRefHeight = linksRef.current.getBoundingClientRect().height;
        if(show){
            linksRefContainer.current.style.height = `${linksRefHeight}px`;
        } 
        else {
            linksRefContainer.current.style.height = '0px'
        }
    }

    useEffect(() => {
        showLinks();
    }, [show])

    return (
        <div className="navbar">
            <div className="navbar_header">
                <button className="menu_icon">
                    <i className="fa fa-bars" onClick={() => setShow(!show)}></i>
                </button>
                <Link to="/">                   
                    <button className="logo_brand">
                        <i className="far fa-clock"></i>
                    </button>
                </Link>
            </div>
            <div className="navbar_links_container" ref={linksRefContainer}>
                <ul className="links" ref={linksRef}>                   
                    {navbarData.map((inf, index) => {
                    let router = ''
                    if(inf === "Home") 
                        router = "/"
                    else if(inf === "Products") 
                        router="/product"
                    else if(inf === "About") 
                        router = "/About"
                    else 
                        router = "/Contact"

                    return <NavLink to={`${router}`} className="link" key={index}>
                            {inf}
                    </NavLink>
                })}
                </ul>
            </div>
            <div className="sign_cart_btn">
                <button className="sign_in_btn">Sign in</button>
                <Link to="/cart" className="cart_amount">
                    <button className="navbar_cart_logo">
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                    <p className='amount'>{amount}</p>
                </Link>          
            </div>   
        </div>
    )
}
