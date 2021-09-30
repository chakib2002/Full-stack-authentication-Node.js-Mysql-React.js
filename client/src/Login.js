import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Account from './assets/account.png'
import './style/Login.css'
import { Link, withRouter } from 'react-router-dom';


function login({auth,values, changes, submit}) {
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={Account} alt="Account" className="Image"></Image>
                </Col>
                <Col style={{paddingTop:"22px"}}>
                    <Form onSubmit={submit}>
                        <h3 className="Text">Member Login </h3>
                        <Link to ='/'>
                        <Button variant="success" type="button" className="register" >
                                Sign In 
                            </Button>
                            </Link>
                        <Form.Group className="mb-3" controlId="user">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" name="user" value={values.user} onChange={changes}  required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" name="pass" value={values.pass} onChange={changes}  required/>
                        </Form.Group>
                        <Button variant="primary" type="submit" size="btn" onClick ={submit}>
                                Login
                            </Button>
                            
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default withRouter(login)