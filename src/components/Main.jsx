import Card from 'react-bootstrap/Card';

const Main = () => {
    return (
        <div className="px-2">
            <Card className="bg-dark text-white border-0">
                <Card.Img src={`${process.env.PUBLIC_URL}/assets/images/main.webp`} alt="Card image" />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <div>
                        <Card.Title className="fs-1 fw-light">Welcome to our store</Card.Title>
                        <Card.Text className="fs-5 d-none d-sm-block">
                            Welcome to our store! Discover a wide range of high-quality products at competitive prices, all in one place.
                            Enjoy a seamless shopping experience with fast delivery and exclusive deals.
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};


export default Main;