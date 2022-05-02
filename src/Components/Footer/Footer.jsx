import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <Link to="/" className="navbar__brand">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://healthy-body.ca/wp-content/uploads/2019/04/healthy-body-digital-over-light-logo-4.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
          adipisci dignissimos assumenda velit facere dolorum illo
          necessitatibus consectetur beatae! Consequatur repellat facilis eius
          odit vero rem, atque vitae fugiat expedita maxime est temporibus
          cupiditate perspiciatis et aliquid, error eaque voluptatibus facere
          architecto inventore recusandae commodi! Quibusdam voluptate doloribus
          amet nam repellendus velit assumenda nobis illo officiis sequi ducimus
          enim, eligendi labore similique rerum impedit hic saepe libero
          cupiditate natus? Fugiat libero in autem nam. Hic sint optio commodi
          laborum pariatur tempora officiis iure doloribus magni ipsam. Dolorem
          modi pariatur dicta? Magni incidunt autem sapiente, ipsa
          exercitationem aspernatur repudiandae. Possimus, voluptates.
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-12"></div>
      </div>
    </div>
  );
};

export default Footer;
