import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "../assets/1.svg";
import { CartContext } from "./cartContext";

const NavBar = () => {
    const { iconCart, cart } = useContext(CartContext);

    return (
        <header>
            <Navbar bg='light' variant='light' expand='lg'>
                <Container>
                    <Link to='/'>
                        <img style={{ width: "40px", marginRight: "1rem" }} src={Logo} />
                    </Link>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav>
                            <NavLink to='/' className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}>
                                Inicio
                            </NavLink>
                            <NavLink to='/category/exterior' className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}>
                                Exterior
                            </NavLink>
                            <NavLink to='/category/interior' className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}>
                                Interior
                            </NavLink>
                        </Nav>
                        <NavLink to='/cart' className='ms-auto'>
                            <CartWidget />
                        </NavLink>
                        {cart.length < 1 ? "" : <p style={{ borderRadius: "50%", backgroundColor: "gold", width: "2%", textAlign: "center" }}>{iconCart()}</p>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavBar;
