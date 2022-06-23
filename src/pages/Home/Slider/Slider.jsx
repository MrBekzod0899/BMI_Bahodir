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
        autoplay: true,
        arrows: false,
        type: "loop",
      }}
      className="slider"
    >
      <SplideSlide>
        <div id="splide1" className="slider-content"></div>
        <div className="slider-text">
          <div className="slider-title">
            <h1>Sog'ligizni asrang</h1>
          </div>
          <div className="slider-info">
            Jismoniy faollikni kundalik sog'lom turmush sayohatingizning bir
            qismiga aylantirish uchun mashq qilishni boshlash, samarali mashq
            qilish, yoga mashg'ulotlari va boshqalar haqida ishonchli ma'lumot
            oling.
          </div>
          <button className="btn text-light">Batafsil</button>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div id="splide2" className="slider-content"></div>
        <div className="slider-text">
          <div className="slider-title">
            <h1>Yoga-Sog'lik garovi</h1>
          </div>
          <div className="slider-info">
            Yoga - bu yillar davomida gullab-yashnagan mashg'ulotdir; Yoga inson
            salomatligiga juda foydali bo'lib,sizni ham jismoniy ham ruhiy
            jihatdan chiniqtiradi. Bir soat yoga bilan shug'ullanish sizni kun
            davomida tetik tutadi va kayfiyatingizni ko'taradi.
          </div>
          <button className="btn text-light">Batafsil</button>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div id="splide3" className="slider-content"></div>
        <div className="slider-text">
          <div className="slider-title">
            <h1>Saxsiy gigiyenaga raioya qiling</h1>
          </div>
          <div className="slider-info">
            Sog’lom ovqatlanish -bu yaxshi kayfiyat va muvozanatni saqlashga
            yordam beruvchi usul va prinsiplardir. Vazn tashlash, semirish yoki
            kun tartibidan yaxshi o’zlashtirilmayotgan mahsulotlarni olib
            tashlash kabi muammolar inson shaxsan tanlaydigan yo’lga bosiladigan
            keyingi qadamdir.
          </div>
          <button className="btn text-light">Batafsil</button>
        </div>
      </SplideSlide>
    </Splide>
  );
};
export default Slider;
