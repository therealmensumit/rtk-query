import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LazyImg } from "./LazyImg";

export const ProductCard = ({ productData }) => {
  const { id, thumbnail, title, price } = productData;
  return (
    <Card className="h-100">
      <Link to={`/products/${id}`} className="text-center">
        <LazyImg
          src={thumbnail}
          alt={`Product-${id}`}
          title={title}
          className="object-fit-contain mt-4 px-2 mw-100"
          style={{ height: 200 }}
        />
      </Link>
      <Card.Body>
        <Link to={`/products/${id}`}>
          <Card.Title className="h6">{title}</Card.Title>
        </Link>
        <Card.Title className="text-dark">${price}</Card.Title>
      </Card.Body>
    </Card>
  );
};
