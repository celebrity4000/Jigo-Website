import Carousel from "react-bootstrap/Carousel";
import banner1 from '../assets/sliders/Banner-01.png';
import banner2 from '../assets/sliders/Banner-02.jpg';
import banner3 from '../assets/sliders/Banner-03.jpg';

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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
