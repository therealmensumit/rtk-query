import { Col, Container, Row } from "react-bootstrap";
import { useGetProductsQuery } from "../services/product";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";
import { ErrorAlert } from "../components/ErrorAlert";

export const Products = () => {
  const { data, isLoading, isError } = useGetProductsQuery();
  // console.log(data);

  return (
    <Container className="py-5">
      <Row className="gy-4">
        <Col xs={12}>
          <h1 className="text-center mb-4">Products</h1>
        </Col>
        {isError ? (
          <ErrorAlert />
        ) : isLoading ? (
          <Loading />
        ) : (
          data?.products?.map((e) => (
            <Col sm={6} lg={4} xl={3} key={e.id}>
              <ProductCard productData={e} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};
