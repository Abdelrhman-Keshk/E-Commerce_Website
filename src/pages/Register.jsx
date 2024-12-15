import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const Register = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center w-100 justify-content-center mt-3">
                <h2 className="fs-1">Register</h2>
                <hr className='hr' />
                <Form className="col-10 col-md-6 col-lg-3">
                    <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <span>Already has an account? <Link to={'/login'} className='link-info'>Login</Link></span>
                    <button className="btn btn-secondary d-block mt-3 mx-auto">Register</button>
                </Form>
            </div>
            <div className="position-absolute bottom-0 end-0 start-0">
                <Footer />
            </div>
        </>
    );
};



export default Register;