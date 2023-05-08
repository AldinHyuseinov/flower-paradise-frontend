import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function RegisterPage() {
    const [validated, setValidated] = useState(false)
    const password = useRef()
    const confirmPassword = useRef()

    const validateConfirmPassword = () => {

        if (password.current.value !== confirmPassword.current.value) {
            return false
        }
        return true
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget
        const isPasswordMatch = validateConfirmPassword()
        const confirmPasswordInput = document.getElementById("floatingConfirmPassword")

        if (!isPasswordMatch) {
            confirmPasswordInput.setCustomValidity("Passwords should match.")
        } else {
            confirmPasswordInput.setCustomValidity("")
        }

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
            <h1 className="text fs-1 text-start mb-3">Register</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="floatingUsername">
                        <Form.Floating className="mb-md-0 mb-3">
                            <Form.Control type="text" placeholder="Username" required minLength="5" maxLength="20" />
                            <Form.Control.Feedback className="text fs-3" type="invalid">
                                Username should be between 5 and 20 symbols.
                            </Form.Control.Feedback>
                            <label className="text fs-4" htmlFor="floatingUsername">Username</label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="floatingEmail">
                        <Form.Floating className="mb-md-0 mb-3">
                            <Form.Control type="email" placeholder="Email" required pattern='.+@.+' />
                            <Form.Control.Feedback className="text fs-3" type="invalid">
                                Enter valid email.
                            </Form.Control.Feedback>
                            <label className="text fs-4" htmlFor="floatingEmail">Email</label>
                        </Form.Floating>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="floatingPassword">
                        <Form.Floating className="mb-md-0 mb-3">
                            <Form.Control type="password" placeholder="Password" required minLength="5" ref={password} />
                            <Form.Control.Feedback className="text fs-3" type="invalid">
                                Password should be at least 5 symbols.
                            </Form.Control.Feedback>
                            <label className="text fs-4" htmlFor="floatingPassword">Password</label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="floatingConfirmPassword">
                        <Form.Floating>
                            <Form.Control type="password" placeholder="Confirm Password" required minLength="5" ref={confirmPassword} />
                            <Form.Control.Feedback className="text fs-3" type="invalid">
                                Passwords should match.
                            </Form.Control.Feedback>
                            <label className="text fs-4" htmlFor="floatingConfirmPassword">Confirm Password</label>
                        </Form.Floating>
                    </Form.Group>
                </Row>
                <Button variant="success" className="text fs-3" type="submit">Register</Button>
            </Form>
        </Container>
    );
}

export default RegisterPage;