import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Account from './assets/account.png'
import './style/Login.css'
import { Link } from 'react-router-dom';


export default function login() {
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={Account} alt="Account" className="Image"></Image>
                </Col>
                <Col style={{paddingTop:"22px"}}>
                    <Form>
                        <h3 className="Text">Member Login </h3>
                        <Link to ='/'>
                        <Button variant="success" type="submit" className="register" >
                                Sign In 
                            </Button>
                            </Link>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" size="btn" >
                                Login
                            </Button>
                            
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
