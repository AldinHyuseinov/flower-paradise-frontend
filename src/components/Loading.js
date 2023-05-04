import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
    return (
        <Container className="my-5 text-center">
            <Spinner animation="border" />
        </Container>
    );
}

export default Loading;