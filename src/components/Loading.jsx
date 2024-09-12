import { Col, Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <>
      <Col xs={12} className="text-center">
        <Spinner />
        <p>Loading.....</p>
      </Col>
    </>
  );
};
