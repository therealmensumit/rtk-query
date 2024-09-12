import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { LazyImg } from "./LazyImg";

export const BlogCard = ({ data }) => {
  const {
    id,
    cover_image,
    title,
    readable_publish_date,
    reading_time_minutes,
    description,
    organization,
  } = data;

  return (
    <Card className="h-100 p-2">
      <Link to={`/blog/${id}`}>
        <LazyImg
          src={cover_image || "https://dummyimage.com/1000x420"}
          className="object-fit-cover card-img-top"
          style={{ height: 200 }}
        />
      </Link>
      <Card.Body className="pt-3 p-2 d-flex flex-column">
        <Stack direction="horizontal" gap={2} className="text-muted mb-2">
          <Stack direction="horizontal" gap={1}>
            <span>{readable_publish_date}</span>
          </Stack>
          <span>•</span>
          <Stack direction="horizontal" gap={1}>
            <span>{reading_time_minutes}min</span>
          </Stack>
        </Stack>
        <Link to={`/blog/${id}`}>
          <Card.Title className="mb-3">{title}</Card.Title>
        </Link>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <Card.Text>
          <FaUserTie /> {organization?.name || "Author"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
