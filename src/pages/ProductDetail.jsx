import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../services/product";
import { DetailedProduct } from "../components/DetailedProduct";
import { ErrorAlert } from "../components/ErrorAlert";
import { Loading } from "../components/Loading";

export const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductByIdQuery(id);
  // console.log(data);

  return (
    <Container className="py-5">
      <Row className="gy-4">
        <Col xs={12}>
          <h1>Product Detail</h1>
        </Col>
        {isError ? (
          <ErrorAlert />
        ) : isLoading ? (
          <Loading />
        ) : (
          <DetailedProduct data={data} />
        )}
      </Row>
    </Container>
  );
};
