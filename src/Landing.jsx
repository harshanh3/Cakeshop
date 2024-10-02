import React from 'react';
import { Button, Card, Col, Nav, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Myimage from './assets/cake1.jpg';
import Myimage1 from './assets/cake2.jpg';
import Myimage2 from './assets/cake4.jpg';
import Myimage3 from './assets/cake5.avif';

const Landing = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">CAKE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="fw-bold">
              <Nav.Link  href="#home">Home</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
              <Nav.Link href="#shop">SHOP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{  position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <img src={Myimage} alt="description" style={{  width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">

        <h1 className="display-4 fw-bold">Welcome to Our Cake Shop</h1>
            <p className="lead">
              Discover our delicious cakes and pastries made with love.
            </p>
            <Button variant="light" size="lg" className="mt-3">
              Shop Now
            </Button>
        </div>
      </div>
      {/*  */}
      <div style={{height:'170px'}} className='bg-white mt-3'>
        <Row className="justify-content-md-center text-dark">
        <Col xs lg="2" className='mt-5 ms-5 text-center'>
        <i class="fa-solid fa-cart-shopping fa-3x"></i>
        <p>Shop Now</p>
         </Col>
        <Col md="auto mt-5 me-5 ms-5 text-center ">
        <i class="fa-solid fa-shop fa-3x"></i>
      <p className=''>  Find us in store</p>
        </Col>
        <Col xs lg="2 mt-5 ms-5 text-center">
        <i class="fa-solid fa-folder-open fa-3x"></i>
         <p> Read our stroy</p>
        </Col>
      </Row>
        </div>

     {/* landing */}
      <div className='row align-items-center mt-3 bg-secondary-subtle'>
       <div className="col ms-lg-5 text-center"style={{ height: '400px' }}>
        <h3 className='text-warning mt-5'>Our Ingredients</h3>
        <p style={{textAlign:"justify-center"}} className='mt-5 text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore nostrum ratione id qui aliquam aliquid veritatis voluptas inventore libero, perspiciatis vitae repudiandae voluptates, magnam accusamus quibusdam accusantium corporis quis. </p>
        <button className='bg-white border-0 p-1 rounded mt-2'>Learn more</button>
       </div>
       <div className="col-lg-6 ">
        <img style={{width:'100%',height:"100%" }} src={Myimage1} alt="" />
       </div>
      </div>
      {/*  */}
      <div className='row bg-success-subtle'>
      <div className="col-lg-6"style={{ height: '400px' }} >
      <img style={{width:'100%',height:"100%" ,objectFit: 'cover' }} src={Myimage2} alt="" />
      </div>
      <div className="col-lg-5 text-center ms-lg-5 mt-5">
      <h3 className='text-warning'>Our Vision</h3>
        <p style={{textAlign:"justify-center"}} className='mt-5 text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore nostrum ratione id qui aliquam aliquid veritatis voluptas inventore libero, perspiciatis vitae repudiandae voluptates, magnam accusamus quibusdam accusantium corporis quis. </p>
        <button className='bg-white border-0 p-1 rounded mt-2'>Read our stroy</button>
        </div>
        </div>
{/* card */}
<div className='mt-5'>
  <img src={Myimage3} alt="" />
</div>
    </>
  );
};

export default Landing;
