import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Employee from './assets/employee.png';
import './style/Register.css'

export default function register() {
    return (
        <Container>
            <Row>
                <Col>

                    <Image src={Employee} alt="Employee"  className="Image"/>
                </Col>
                <Col style={{paddingTop:"22px"}}>
                    <h3 className="titles">Member Sign In</h3>
                    <Link to="/login">
                    <Button variant="primary" type="button" className="login">Login</Button>
                    </Link>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="text" placeholder="Enter your phone number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="success" type="submit" >
                                Sign In 
                            </Button>

                        </Form>
                </Col>
            </Row>
        </Container>
    )}
