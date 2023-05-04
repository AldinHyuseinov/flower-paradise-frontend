import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

function ErrorPage() {
    return (
        <Container className="my-5">
            <Row>
                <h2 className="text-center">No such page exists!</h2>
            </Row>
            <Row className="justify-content-center">
                <Col className="col-6 text-center">
                    <Button variant="primary" className="w-50" href="/">Home</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ErrorPage;