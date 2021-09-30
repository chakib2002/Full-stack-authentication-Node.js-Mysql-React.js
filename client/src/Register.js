import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Employee from './assets/employee.png';
import './style/Register.css'

function register({values, changes, submit}) {
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
                        <Form onSubmit={submit}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" name="username" value={values.username} onChange={changes} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="first_name">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" name="first_name" value={values.first_name} onChange={changes} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="last_name">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name" name="last_name" value={values.last_name} onChange={changes} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name="email" value={values.email} onChange={changes} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="phone_number">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="text" placeholder="Enter your phone number" name="phone_number" value={values.phone_number} onChange={changes}  required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={values.password} onChange={changes} required/>
                            </Form.Group>
                            <Button variant="success" type="submit" onSubmit={submit} >
                                Sign In 
                            </Button>

                        </Form>
                </Col>
            </Row>
        </Container>
    )}
export default withRouter(register)