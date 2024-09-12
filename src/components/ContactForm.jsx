import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="gy-4">
        <Col md={6}>
          <Form.Control
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="First name"
          />
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Last name"
          />
        </Col>
        <Col md={6}>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </Col>
        <Col md={6}>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
        </Col>
        <Col md={12}>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
          />
        </Col>
        <Col md={12}>
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
};
