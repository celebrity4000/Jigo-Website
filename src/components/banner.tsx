import Carousel from "react-bootstrap/Carousel";
import banner1 from '../assets/sliders/Banner-01.jpg';
import banner2 from '../assets/sliders/Banner-02.jpg';
import banner3 from '../assets/sliders/Banner-03.jpg';
import banner4 from '../assets/sliders/Banner-04.jpg';
import banner5 from '../assets/sliders/Banner-05.jpg';
import banner6 from '../assets/sliders/Banner-06.jpg';

const Banner = () => {
  return (
    <Carousel
      data-bs-theme="light"
      fade
      prevIcon={
        <div className="rounded-circle bg-white p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth={2.5}
            stroke="#63368a"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      }
      nextIcon={
        <div className="rounded-circle bg-white p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            // viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="#63368a"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      }
    >
      {[banner1, banner2, banner3, banner4, banner5, banner6].map((banner, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={banner}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
