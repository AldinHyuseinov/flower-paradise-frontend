import Container from 'react-bootstrap/Container'
import '../css/common.css';

function Footer() {
    return (
        <footer className="footer rounded">
            <Container fluid className='text-center'>
                <div className="text h5 text-black">
                    &copy; 2023 Flower Paradise. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;