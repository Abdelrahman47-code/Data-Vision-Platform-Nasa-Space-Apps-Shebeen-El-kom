import SliderButtons from "./SliderButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Link } from "react-router-dom";

const TopDatasets = () => {
  const datasets = [
    { title: "Electric Vehicle Population Data", url:'https://catalog.data.gov/dataset/electric-vehicle-population-data' },
    { title: "Crime Data from 2020 to Present", url:'https://catalog.data.gov/dataset/crime-data-from-2020-to-present' },
    { title: "FDIC Failed Bank List", url:'https://catalog.data.gov/dataset/fdic-failed-bank-list' },
    { title: "Lottery Powerball Winning Numbers: Beginning 2010", url:'https://catalog.data.gov/dataset/lottery-powerball-winning-numbers-beginning-2010' },
    { title: "Fruit and Vegetable Prices", url:'https://catalog.data.gov/dataset/fruit-and-vegetable-prices' },
    { title: "U.S. Chronic Disease Indicators (CDI)", url:'https://catalog.data.gov/dataset/u-s-chronic-disease-indicators-cdi' },
  ];
  return (
    <div className="slider_section">
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          breakpoints={{
            510: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            991: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <div className="head" slot="container-start">
            <h1 className="section_head">
              <span className="gradientText">Popular</span> Datasets
            </h1>
            <SliderButtons />
          </div>
          {datasets.map((dataset, index) => {
            return (
              <SwiperSlide key={index} className="card">
                <Link to={dataset.url}>
                  <h2>{dataset.title}</h2>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default TopDatasets;
