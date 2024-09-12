import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const LazyImg = ({ alt, src, className, style, title }) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      className={className}
      style={style}
      title={title}
      effect="blur"
      wrapperProps={{
        style: { transitionDelay: "0.5s" },
      }}
    />
  );
};
