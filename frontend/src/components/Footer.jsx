import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as globals from "../GLOBALS";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col class="text-center py-3">
            Copyright &copy; {globals.STORE_NAME}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
