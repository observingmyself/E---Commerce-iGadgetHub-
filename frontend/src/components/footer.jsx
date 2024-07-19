import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const footer = () => {
  return (
    <>
      <footer>
      <Container>
          <Row>
            <Col className="text-center" style={{bottom:"15px"}}>
              <span>Copyright &copy; Tech Corporation owned by Prince</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default footer;
