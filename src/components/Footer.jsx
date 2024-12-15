import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="bg-body-secondary d-flex justify-content-center pb-4">
                <p className="mt-1">Devolped by <Link className="fs-5 link-dark">Abdelrahamn Keshk</Link></p>
            </div>
        </footer>
    );
};



export default Footer;