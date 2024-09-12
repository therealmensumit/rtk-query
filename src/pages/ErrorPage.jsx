import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} className="text-center">
          <h1 className="mb-4">No Page Found</h1>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Col>
      </Row>
    </Container>
  );
};
