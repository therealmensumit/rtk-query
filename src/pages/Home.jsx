import { Col, Container, Image, Row } from "react-bootstrap";
import { MySlider } from "../components/MySlider";
import { SwiperSlide } from "swiper/react";
import { useGetBlogQuery } from "../services/blog";
import { Loading } from "../components/Loading";
import { ErrorAlert } from "../components/ErrorAlert";

export const Home = () => {
  const { data, isLoading, isError } = useGetBlogQuery();

  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="px-0">
          {isError ? (
            <ErrorAlert />
          ) : isLoading ? (
            <div className="py-3">
              <Loading />
            </div>
          ) : (
            <MySlider>
              {data?.slice(20, 26)?.map((e) => (
                <SwiperSlide key={e?.id}>
                  <Image
                    src={e?.social_image}
                    alt={e?.title}
                    width={"100%"}
                    height={500}
                    className="object-fit-cover object-position-center"
                  />
                </SwiperSlide>
              ))}
            </MySlider>
          )}
        </Col>
      </Row>
    </Container>
  );
};
