import Container from "react-bootstrap/Container";
import '../css/landing-page.css';

function HomePage() {
    return (
        <Container className="my-5" fluid>
            <div className="d-flex flex-md-row flex-column gap-md-5 gap-1 bg-image img-fluid p-5 text-center shadow rounded mb-5">
                <h1 className="welcome mt-5 pt-5 text-center">Welcome to Flower Paradise!</h1>
                <div className="mt-md-3 mt-0 p-md-3 p-0">
                    <p className="welcome-text mt-md-4 mt-0 pt-md-5 pt-0">Buy and send Flowers to your loved ones! We offer floral arrangements,
                        plants and gifts created and delivered by our local Sofia flower shop. For Valentine's Day, Mother's Day or
                        Just Because you can trust our professional designers to deliver a memorable floral experience.</p>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;