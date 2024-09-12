import { Badge, Button, Col, Figure, Image, Stack } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";
import { ZoomImg } from "./ZoomImg";
import { useState } from "react";

export const DetailedProduct = ({ data }) => {
  const { images, title, price, discountPercentage, description, rating } =
    data;

  // Initialize state with the first image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to handle thumbnail click
  const handleThumbnailClick = (img) => {
    setCurrentImage(img);
  };

  return (
    <>
      <Col xs={12} md={4}>
        <Figure className="d-block p-4 border border-secondary-subtle rounded">
          <ZoomImg>
            <Image src={currentImage} alt={title} fluid />
          </ZoomImg>
        </Figure>
        <Stack gap={3} direction="horizontal">
          {images?.map((img, i) => (
            <Button
              variant="outline-secondary"
              key={i}
              onClick={() => handleThumbnailClick(img)}
              style={{ width: 80, height: 80 }}
              className={`p-1`}>
              <Image src={img} alt={`Thumbnail-${i}`} fluid />
            </Button>
          ))}
        </Stack>
      </Col>
      <Col xs={12} md={8}>
        <h4>{title}</h4>
        <h3>
          <Stack gap={4} direction="horizontal">
            <span>${price}</span>
            <span className="fw-semibold h6 text-success mb-0">
              {discountPercentage}% off
            </span>
          </Stack>
        </h3>
        <p>{description}</p>
        <div className="mb-3">
          <Badge bg="success">
            {rating} <FaStar className="ms-1" />
          </Badge>
        </div>
        <Stack gap={3} direction="horizontal">
          <Button
            variant="warning"
            onClick={() => alert("Product added to cart")}>
            Add to Cart
          </Button>
          <Button variant="danger">Buy Now</Button>
        </Stack>
      </Col>
    </>
  );
};
