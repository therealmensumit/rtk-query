import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const ZoomImg = ({ children }) => {
  return <Zoom>{children}</Zoom>;
};
