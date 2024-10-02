import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
    <Container>
      <Row className="py-4">
        <Col md={4} className="text-center">
          <h5>About Us</h5>
          <p>
            We are dedicated to providing the best products and services for our customers.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li><a href="#home" className="text-white">Home</a></li>
            <li><a href="#about" className="text-white">About</a></li>
            <li><a href="#shop" className="text-white">Shop</a></li>
            <li><a href="#contact" className="text-white">Contact</a></li>
          </ul>
        </Col>
        <Col md={4} className="text-center">
          <h5>Follow Us</h5>
          <a href="#!" className="text-white me-3">
          <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#!" className="text-white me-3">
          <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-3">
          <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#!" className="text-white">
          <i class="fa-brands fa-youtube"></i>
          </a>
          <div className="text-start">  
           <p className='mt-4'>Keep in touch</p>
           <input placeholder='Email' type="text" />
           <button className='bg-white border-0 p-1 rounded ms-3'>Sign up</button>
          </div>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <p className="mb-0">© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>

  )
}

export default Footer