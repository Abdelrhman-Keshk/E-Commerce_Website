import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const Login = () => {
    return (
        <>
            <div style={{}} className="d-flex flex-column align-items-center w-100 justify-content-center mt-3">
                <h2 className="fs-1">Login</h2>
                <hr className='hr' />
                <Form className="col-10 col-md-6 col-lg-3">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <p>New Here? <Link to={'/register'} className='link-info'>Register</Link></p>
                    <button className="btn btn-secondary d-block mt-3 mx-auto">Login</button>
                </Form>
            </div>
            <div className="position-absolute z-0 bottom-0 end-0 start-0">
                <Footer />
            </div>
        </>
    );
};



export default Login;