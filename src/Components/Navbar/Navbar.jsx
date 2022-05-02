import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar=()=>{
    return (
             <div className="container-fluid navbar">
                    <div className="row ">
                    <div className="col-xl-10  col-lg-12  col-md-12 col-sm-12">   
                        <Link to='/' className='navbar__brand'>
                            <img src='https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://healthy-body.ca/wp-content/uploads/2019/04/healthy-body-digital-over-light-logo-4.png' alt="logo"/>
                        </Link>
                        <ul className="navbar__list">
                            <li className="navbar__item"><a href="#!">Bosh Sahifa</a></li>
                            <li className="navbar__item"><a href="#!">Bizning Xizmat</a></li>
                            <li className="navbar__item"><a href="#!">Mahsulotlarimiz</a>
                                <ul className="inneritem">
                                    <li><a href="#!">Dorilar</a></li>
                                    <li><a href="#!">Dorilar</a></li>
                                    <li><a href="#!">Dorilar</a></li>
                                    <li><a href="#!">Dorilar</a></li>
                                </ul>
                            </li>
                            <li className="navbar__item"><a href="#!">Home</a></li>
                            <li className="navbar__item"><a href="#!">Home</a></li>
                            <li className="navbar__item"><a href="#!">Home</a></li>
                            <li className="navbar__item"><a href="#!">Home</a></li>
                            <li className="navbar__item"><a href="#!">Home</a></li>
                            <li className="navbar__item"><a href="#!">Home</a></li>
                        </ul>
                    </div>
                    </div>     
        </div>
       
    )
}
export default Navbar