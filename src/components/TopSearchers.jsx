import SliderButtons from "./SliderButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import userImg from "../assets/images/user.jpg";
import userImg1 from "../assets/images/pearson1.jpg";
import userImg2 from "../assets/images/pearson2.jpg";
import userImg3 from "../assets/images/pearson3.jpg";
import userImg4 from "../assets/images/pearson4.jpg";
import userImg5 from "../assets/images/pearson5.jpg";
import userImg6 from "../assets/images/pearson6.jpg";
import userImg7 from "../assets/images/pearson7.jpg";

const TopSearchers = () => {
  const topSearchers = [
    { title: "John Doe", img: userImg1, n_of_researches: 15 },
    { title: "Michael Johnson", img: userImg3, n_of_researches: 10 },
    { title: "David Brown", img: userImg5, n_of_researches: 20 },
    { title: "Robert Taylor", img: userImg7, n_of_researches: 25 },
    { title: "Matthew Jones", img: userImg6, n_of_researches: 19 },
    
    { title: "William Lee", img: userImg6, n_of_researches: 12 },
    { title: "Joseph Taylor", img: userImg7, n_of_researches: 25 },
    { title: "Benjamin Wilson", img: userImg6, n_of_researches: 16 },
    { title: "Matthew Jones", img: userImg6, n_of_researches: 19 },
    { title: "Daniel Anderson", img: userImg6, n_of_researches: 14 },
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
              <span className="gradientText">Top</span> Researchs
            </h1>
            <SliderButtons />
          </div>
          {topSearchers.map((searcher, index) => {
            return (
              <SwiperSlide key={index} className="card">
                <Link to={`/users/${searcher.title}`}>
                  <img src={searcher.img || userImg} alt={searcher.title} />
                  <h2>{searcher.title}</h2>
                  <p>Number of Researches: {searcher.n_of_researches}</p>
                </Link>
                <div className="social">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-threads"></i>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default TopSearchers;
