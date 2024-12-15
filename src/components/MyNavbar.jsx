import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';


function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary px-5 py-4">
            <Container fluid>
                <Link to={'/'} className="text-decoration-none"><Navbar.Brand className="fw-bold fs-3">E-commerce</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                    >
                        <NavLink to="/" className="nav-link fs-5">Home</NavLink>
                        <NavLink to="/products" className="nav-link fs-5">Products</NavLink>
                        <NavLink to="/about" className="nav-link fs-5">About</NavLink>
                        <NavLink to="/contact" className="nav-link fs-5">Contact</NavLink>
                    </Nav>
                    
                        <NavLink to={'/login'} className="btn btn-outline-dark focus-ring focus-ring-dark me-3"><i className="fa-solid fa-right-to-bracket" /> Login</NavLink>
                        <NavLink to={'/register'} className="btn btn-outline-dark focus-ring focus-ring-dark me-3"><i className="fa-solid fa-user-plus" /> Register</NavLink>
                        <NavLink to={'/cart'} className="btn btn-outline-dark focus-ring focus-ring-dark"><i className="fa-solid fa-cart-shopping" /> Cart (0)</NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;