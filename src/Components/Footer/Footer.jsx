import React from "react";
import { Link } from "react-router-dom";
import './footer.scss'
import logo from '../../Assets/HB_logo_90x.webp'
const Footer = () => {
  return (
    <div className="footer">
            <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <Link to="/" className="navbar__brand">
                <img
                src={logo}
                alt="logo"
                width={150}
                />
            </Link>
            <ul>
                <li><span>Toshkent ,Yunusobod tumani,13-kavartal 35-uy</span></li>
                <li><label htmlFor="tel">Tel:</label><a href="#!">+998330333333</a></li>
                <li><label htmlFor="email">Email:</label><a href="#!">+998990999999</a></li>
                <li><label htmlFor="fax">Fax:</label><a href="#!">+99951234567</a></li>
            </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                  <ul className="footer-list">
                      <li>
                          <Link to="/">Bosh sahifa</Link>
                      </li>
                      <li>
                          <Link to="/">Xizmatlarimiz</Link>
                      </li>
                      <li>
                          <Link to="/">Tibbiy sug'urta</Link>
                      </li>
                      <li>
                          <Link to="/">Yangiliklar</Link>
                      </li>
                      <li>
                          <Link to="/">Buyurtma berish</Link>
                      </li>
                      <li>
                          <Link to="/">Bog'lanish</Link>
                      </li>
                  </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                  <ul>
                      <li>
                          <Link to="/">Bizning xizmatlar</Link>
                      </li>
                      <li>
                          <Link to="/">Massaj</Link>
                      </li>
                      <li>
                          <Link to="/">Fizioterapiya</Link>
                      </li>
                      <li>
                          <Link to="/">Diagnoz</Link>
                      </li>
                      <li>
                          <Link to="/">Physiotherapy</Link>
                      </li>
                      <li>
                          <Link to="/">igna terapiya</Link>
                      </li>
                      <li>
                          <Link to="/">Shok to'lqini terapiyasi</Link>
                      </li>
                      <li>
                          <Link to="/">Custom Orthotics</Link>
                      </li>
                      <li>
                          <Link to="/">Miya chayqalishini boshqarish</Link>
                      </li>
                      
                  </ul>
            </div>
            
        </div>
        </div>
    </div>
    
  );
};

export default Footer;
