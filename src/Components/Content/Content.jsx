import React from "react";
import "./content.scss";

import ReactPlayer from "react-player";
const Content = () => {
  return (
    <div className="content">
      <div className="infoService">
        <div className="row">
          <div className="col-lg-3">
            <div className="content-header">
              <i class="fa-solid fa-clock"></i>
              <p>Ish vaqti</p>
              <ul>
                <li>
                  <b>Dushanba</b>
                  <span>9:00dan-7:30gacha</span>
                </li>
                <li>
                  <b>Seshanba</b>
                  <span>9:00dan-7:30gacha</span>
                </li>
                <li>
                  <b>Chorshanba</b>
                  <span>9:00dan-7:30gacha</span>
                </li>
                <li>
                  <b>Payshanba</b>
                  <span>9:00dan-7:30gacha</span>
                </li>
                <li>
                  <b>Juma</b>
                  <span>9:00dan-7:30gacha</span>
                </li>
                <li>
                  <b>Shanba</b>
                  <span>9:00dan-7:30gacha</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="content-header">
              <i class="fa-solid fa-calendar"></i>
              <p>Uchrashuvlar</p>
            </div>
            <p>
              Uchrashuvni rejalashtirish yoki onlayn bron qilish uchun bizga
              qo'ngjirog giling .
            </p>
            <h4>Hozir band qiling</h4>
          </div>
          <div className="col-lg-3">
            <div className="content-header">
              <i class="fa-solid fa-server"></i>
              <p>Xizmatlar</p>
            </div>
            <p>
              Biz Chiropraktika, Fizioterapiya, Massaj, Napuropatiya va boshqa
              turdagi ko'p xizmatlarni taklif etamiz
            </p>
            <h4>Barcha xizmatlarni ko'rish</h4>
          </div>
          <div className="content-footer">
            <h2>Video resurslar</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <ReactPlayer
              controls={true}
              className="video-content"
              url="https://youtu.be/BOjTegn9RuY"
            />
            <div className="card-footer">
              <h4>Low Back Pain</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <ReactPlayer
              controls={true}
              className="video-content"
              url="https://youtu.be/p5zb17r0f3U"
            />
            <div className="card-footer">
              <h4>What Is Naturopathic Medicine?</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container locations">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="locationInfo">
              <i class="fa-solid fa-location-dot"></i>
              <h4>Bizning manzilimiz</h4>
              <p>
                Biz Yunusobod tumani 11-mavze, MEGA PLANET savdo markazidan uzoq
                bo'lmagan Grant Hall restoran yaqinida bir necha daqidalik
                yo'lda joylashganmiz. Binoda bepul avtoturargoh mavjud.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="locationInfo">
              <i class="fa-solid fa-star"></i>
              <h4>Eng yaxshi mutaxasislar</h4>
              <p>
                Sizni mukammal parvarish qilish uchun malakali murabbiylar bilan
                ta'minlash . Sog'lom tana ochilganiga endi 3 yil bo'ldi va biz
                shu vaqt ichida mahorat va mehribonlik bilan mijozlarimizga
                g'amxo'rlik qilmoqdamiz. Albatta bu parvarishlarni o'zingiz his
                qiling.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="locationInfo">
              <i class="fa-solid fa-dollar-sign"></i>
              <h4>Arzon va qulay to'lov</h4>
              <p>
                Sizga qulay bo'lishi uchun biz har qanday turdagi to'lov
                usullaridan foydalanamiz. Birinchi tashrifingizda siz
                haqingizdagi maʼlumotlarni olib qo'yamiz va siz bilan kelgan xar
                bir mijoz uchun sizga bonus sifatida to'lov narxi arzonlab
                boradi.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="locationInfo">
              <i class="fa-solid fa-hands-holding-child"></i>
              <h4>To'liq Davolanish</h4>
              <p>
                Og'ir kasalikka chalingan odamlar bilan tez yordam ko'rsatiladi.
                Qayerda bo'lmasin ish joyidagi shikastlanish, miya chayqalishi
                yoki og'riq va qattiq yo'l-transport hodisasidan, to'liq
                davolanishingiz mumkin.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="order">
        <div className="order-content">
          <p>Hoziroq Ro'yhatdan o'ting!</p>
          <span>Ko'rikni belgilash yoki online bron qilish</span>
          <div>
            <button className="btn ">Band qilish</button>
          </div>
        </div>
      </div>
      <div className="ourService container">
        <div className="row">
          <div className="serviceInfo">
            <h4>Bizning xizmatlarimiz</h4>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <img src={require("../../Assets/icon1.png")} alt="icon1" />
              </div>
              <h4>Fizioterapiya</h4>
              <p>
                Fizioterapiya protseduralari tiklanishni tezlashtirish, uzoq
                vaqt og’riqli davrdan so’ng tanani tiklash, normal hayotiy
                jarayonlarni tiklash, jarohatlarni davolash va tana ohangini
                tiklash uchun buyuriladi.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <img src={require("../../Assets/icon2.png")} alt="icon2" />
              </div>
              <div className="card-info">
                <h4>Chiropraktika</h4>
                <p>
                  nervlar, mushaklar va organlarga ta'sir qilish orqali boshqa
                  kasalliklarni keltirib chiqaradigan bo'g'imlarning, ayniqsa,
                  orqa miya ustunining noto'g'ri joylashishini diagnostika
                  qilish va manipulyatsiya....
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <img src={require("../../Assets/icon3.png")} alt="icon3" />
              </div>
              <div className="card-info">
                <h4>Naturopathy</h4>
                <p>
                  kasalliklarni dori vositalarisiz, parhezni nazorat qilish,
                  jismoniy mashqlar va massaj kabi usullar bilan muvaffaqiyatli
                  davolash yoki oldini olish mumkinligi haqidagi nazariyaga...
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <img src={require("../../Assets/icon4.png")} alt="icon4" />
              </div>
              <div className="card-info">
                <h4>Qo'shimcha xizmatlar</h4>
                <p>
                  Bizda judaham ko'plab xizmatlar mavjud .Yangidan yangi
                  texnologiyalar , yangi tekshiruv aparatlari malakali xodimilar
                  doimo sizga xizmat qiladi.Sizning sog'lig'ingizga g'amxurlik...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
