import { Col, Container, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col xs={12}>
          <h1 className="text-center">Home page</h1>
        </Col>
      </Row>
    </Container>
  );
};
