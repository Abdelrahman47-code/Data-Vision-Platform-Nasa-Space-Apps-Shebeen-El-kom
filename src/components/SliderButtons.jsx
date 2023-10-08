import { useSwiper } from "swiper/react";

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="controls">
      <button onClick={() => swiper.slidePrev()}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button onClick={() => swiper.slideNext()}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default SliderButtons;
