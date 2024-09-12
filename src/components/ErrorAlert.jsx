import { Alert, Col } from "react-bootstrap";

export const ErrorAlert = () => {
  return (
    <>
      <Col xs={12}>
        <Alert variant="danger">Internal Error</Alert>
      </Col>
    </>
  );
};
