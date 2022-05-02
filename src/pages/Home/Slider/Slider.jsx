import React from "react";
import "@splidejs/react-splide/css";
// import videoUrl from "../../../Assets/video1.mp4";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./slider.scss";
// import bg1 from "../../../Assets/bg1.jpg";
// import bg2 from "../../../Assets/bg2.jpg";
// import bg3 from "../../../Assets/bg3.jpg";

const Slider = () => {
  return (
    <Splide
      options={{
        autoplay:true,
        arrows:false,
        type:'loop',
      }}
      className="slider"
    >
      <SplideSlide id="splide1">
        <div className="slider-content">
        </div>
        <div className="slider-text">
            <div className="slider-title">
              <h1>Care To Feel Better </h1>
            </div>
            <div className="slider-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              esse optio tempore totam vitae autem repudiandae quasi doloribus
              minus recusandae.
            </div>
            <button className="btn text-light">book online</button>
          </div>
      </SplideSlide>
      <SplideSlide id='splide2'>
      <div className="slider-content">
      </div>
      <div className="slider-text">
          <div className="slider-title">
            <h1>Care To Feel Better </h1>
          </div>
          <div className="slider-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            esse optio tempore totam vitae autem repudiandae quasi doloribus
            minus recusandae.
          </div>
          <button className="btn text-light">book online</button>
        </div>
      </SplideSlide>
      <SplideSlide id="splide3">
        <div className="slider-content">
        </div>
        <div className="slider-text">
          <div className="slider-title">
            <h1>Care To Feel Better </h1>
          </div>
          <div className="slider-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            esse optio tempore totam vitae autem repudiandae quasi doloribus
            minus recusandae.
          </div>
          <button className="btn text-light">book online</button>
        </div>
      </SplideSlide>
    </Splide>
  );
};
export default Slider;
