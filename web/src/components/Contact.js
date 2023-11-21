import React, { Component } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

import { Col, Button, Form, Card, Row } from 'react-bootstrap'
import { contact } from '../Services'
import { toast } from 'react-toastify'

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            message: ''
        };
        this.baseState = this.state
    }

    handleChange = type => event => {
        let value = event
        if (event.target) {
            value = event.target.value
        }
        this.setState({ [type]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        contact(this.state)
            .then(res => {
                toast.success("Your message has been sent..")
                this.setState({ ...this.baseState })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const iconSize = 30;
        const iconColor = '#0077B5';
        return (
            <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Col>
                    <Card style={{ padding: 20, margin: 10 }}>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control required type="username" placeholder="Enter first name" onChange={this.handleChange('fname')} value={this.state.fname} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control required type="username" placeholder="Enter last name" onChange={this.handleChange('lname')} value={this.state.lname} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="username" placeholder="Enter Phone Number" onChange={this.handleChange('phone')} value={this.state.phone} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required type="email" placeholder="Enter email" onChange={this.handleChange('email')} value={this.state.email} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="controlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control required as="textarea" rows="3" onChange={this.handleChange('message')} value={this.state.message} />
                            </Form.Group>
                            <Col style={{ paddingRight: 0 }} align='right'>
                                <Button variant="success" type="submit">
                                    Send Message
                                </Button>
                            </Col>
                        </Form>
                    </Card>
                </Col>
                <Col>
                    <Row style={{ alignItems: 'center', justifyContent: 'center', margin: 30 }}>
                        <Col>


<div id="page">
  <p><strong><span style={{ textDecoration: 'underline' }}>General Information</span></strong></p>
  <p>
    <strong>Telephones :</strong> +250 788 0000 <br />
    <strong>PO Box :</strong> 2004<br />
    <strong>Email :</strong>
    <a href="mailto:letsgo@gmail.com"> letsgo@gmail.com</a>
    <span style={{ display: 'none' }}>This e-mail address is being protected from spambots. You need JavaScript enabled to view it</span>
  </p>
  <p><strong>Location</strong> : Kigali, Rwanda</p>
  <p className="MsoNormal"><strong>Station Representative</strong> : 343434</p>
  
  <p>
        <a href="https://www.instagram.com/your_instagram_profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={iconSize} style={{ marginRight: '10px', color: iconColor }} />
        </a>
        
        <a href="https://www.linkedin.com/in/your_linkedin_profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={iconSize} style={{ marginLeft: '10px', color: iconColor }}/>
        </a>
  </p>
</div>

                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Contact;