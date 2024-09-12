import { Col, Container, Figure, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../services/blog";
import { ErrorAlert } from "../components/ErrorAlert";
import { Loading } from "../components/Loading";
import { FaRegCalendar, FaRegClock } from "react-icons/fa6";
import { LazyImg } from "../components/LazyImg";

export const BlogDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBlogByIdQuery(id);

  return (
    <Container className="py-5">
      <Row>
        {isError ? (
          <ErrorAlert />
        ) : isLoading ? (
          <Loading />
        ) : (
          <Col xs={12} lg={{ offset: 1, span: 10 }}>
            <Stack direction="horizontal" gap={3} className="mb-2">
              <Stack direction="horizontal" gap={1}>
                <strong>Published on: </strong>
                <FaRegCalendar />
                <span>{data?.readable_publish_date}</span>
              </Stack>
              <Stack direction="horizontal" gap={1}>
                <strong>Read time: </strong>
                <FaRegClock />
                <span>{data?.reading_time_minutes}min</span>
              </Stack>
            </Stack>
            <Figure>
              <LazyImg
                src={data?.cover_image || "https://dummyimage.com/1000x420"}
                alt={`Image-${data?.id}`}
                title={data?.title}
                className={"rounded img-fluid"}
              />
            </Figure>
            <h1>{data?.title}</h1>
            <p className="text-break">{data?.body_markdown}</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};
