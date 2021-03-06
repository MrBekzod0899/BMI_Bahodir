import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from '../../Assets/HB_logo_90x.webp'

const Navbar = () => {
    const [show,setShow]=useState(false)
    console.log(show)
    document.querySelectorAll('.navbar__item').forEach(item=>{
        item.addEventListener('click',()=>{
            setShow(false)
        })
    })
  return (
    <div className={`container-fluid navbar ${show ? "showNav" : ''}`}>
      <div className="row ">
        <div className="col-xl-10  col-lg-12  col-md-12 col-sm-12">
        {
            !show ? <i className="fa-solid fa-bars text-dark" onClick={()=>setShow(!show)} ></i> :
            <i onClick={()=>setShow(!show)} className="fa-solid fa-xmark"></i>
        }
          <Link to="/" className="navbar__brand">
            <img
              src={logo}
              alt="logo"
              width={80}
              height={80}
            />
          </Link>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to='/'>Bosh Sahifa</Link>
            </li>
            <li className="navbar__item">
              <a href="#!">Bizning Xizmatlar</a>
            </li>
            <li className="navbar__item">
              <Link to="/product">Mahsulotlarimiz</Link>
              <ul className="inneritem">
                <li>
                  <a href="#!">Vataminlar</a>
                </li>
                <li>
                  <a href="#!">Fitness jihozlar</a>
                </li>
                 <li>
                  <a href="#!">Dorilar</a>
                </li>
              </ul>
            </li>
            <li className="navbar__item">
              <a href="#!">Yangiliklar</a>
            </li>
            <li className="navbar__item">
              <a href="#!">Biz haqimizda</a>
            </li>
            <li className="navbar__item">
              <a href="#!">Fitness</a>
            </li>
         
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
