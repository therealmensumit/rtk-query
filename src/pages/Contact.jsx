import { Col, Container, Row } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";

export const Contact = () => {
  return (
    <section className="bg-light">
      <Container className="py-5">
        <Row className="gy-4">
          <Col xs={12}>
            <h1 className="text-center">Contact</h1>
          </Col>
          <Col xs={12} lg={{ offset: 2, span: 8 }}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
