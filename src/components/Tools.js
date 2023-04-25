import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../components-css/Tools.css';

export default function Tools() {
  return (
    <div id="tools">
      <div className="container container-fluid" >
        <h3 className="main-title-projects tool" >Tools</h3>
      </div>
      <Container fluid className="d-flex justify-content-center">
        <Row className="my-2">
          <Col xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center align-items-center my-2 js">
            <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-best-web-design-psd-html-cms-development-ecommerce-6.png" alt="Html5" className="img-fluid" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center align-items-center my-2 js">
            <img src="https://media.licdn.com/dms/image/C4E12AQElvDkXzTw85g/article-cover_image-shrink_720_1280/0/1615427806393?e=2147483647&v=beta&t=EJXnS8HTpBtI4L9AT18g6Phe23uEazSCvKrepSn2LMA" alt="Redux-React" className="img-fluid" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center align-items-center my-2 tools-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Node" className="img-fluid" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center align-items-center my-2 tools-img">
            <img src="https://miro.medium.com/max/600/1*i37IyHf6vnhqWIA9osxU3w.png" alt="Jest" className="img-fluid" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center align-items-center my-2 tools-img">
            <img src="https://testing-library.com/img/octopus-128x128.png" alt="Rtl" className="img-fluid" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center align-items-center my-2 tools-img">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="img-fluid " />
          </Col>
        </Row>
      </Container>
    </div>
  );
}