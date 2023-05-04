import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function LoginPage() {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            //fetch
        }

        setValidated(true)
    }
    return (
        <Container className="my-5">
            <h1 className="text-start mb-3">Login</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="text" placeholder="Username" required minLength="5" maxLength="20" />
                            <Form.Control.Feedback type="invalid">
                                Username should be between 5 and 20 symbols.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="password" placeholder="Password" required minLength="5" />
                            <Form.Control.Feedback type="invalid">
                                Password should be at least 5 symbols.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Button type="submit">Login</Button>
            </Form>
        </Container>
    );
}

export default LoginPage;