import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MySlider = ({ children }) => {
  const swiperConfig = {
    navigation: true,
    spaceBetween: 50,
    slidesPerView: 1,
    modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    pagination: { clickable: true },
    autoplay: { delay: 1500 },
    // scrollbar: { draggable: false },
  };

  return <Swiper {...swiperConfig}>{children}</Swiper>;
};
