import { Col, Container, Row } from "react-bootstrap";
import { useGetBlogQuery } from "../services/blog";
import { Loading } from "../components/Loading";
import { ErrorAlert } from "../components/ErrorAlert";
import { BlogCard } from "../components/BlogCard";

export const Blog = () => {
  const { data, isLoading, isError } = useGetBlogQuery();
  //   console.log(data);

  return (
    <Container className="py-5">
      <Row className="gy-4">
        <Col xs={12}>
          <h1 className="text-center mb-4">Blog</h1>
        </Col>
        {isError ? (
          <ErrorAlert />
        ) : isLoading ? (
          <Loading />
        ) : (
          data?.map((e) => (
            <Col key={e?.id} xs={12} md={6} lg={4}>
              <BlogCard data={e} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};
