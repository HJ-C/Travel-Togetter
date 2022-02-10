import '../css/main.css'
import '../css/travel.css'
import '../css/review.css'
import '../css/accommodation.css'
import React from "react"
import {Link, Route, Switch} from 'react-router-dom'


function Menu() {
   return (
        <header>
    <div className="inner">

      <a href="/" className="logo">
        <img src="./assets/main/logo.png" alt="Trip" />
      </a>

      <div className="sub-menu">
        <ul className="menu">
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="">My Blog</Link>
          </li>
          <li>
            <Link to="">Service</Link>
          </li>
          <li>
            <Link to="">Find</Link>
          </li>
        </ul>
        <div className="search">
          <input type="text" />
          <span className="material-icons">search</span>
        </div>
      </div>

      <ul className="main-menu">
        <li className="item">
          <Link to="./accommodation">
            <div className="item__name">숙소</div>
          </Link>
        </li>
        <li className="item">
          <Link to="/review">
            <div className="item__name">갤러리</div>
          </Link>
        </li>
        <li className="item">
          <Link to="./travel">
            <div className="item__name">여행</div>
          </Link>
        </li>
        <li className="item">
          <div className="item__name">소개</div>
        </li>
      </ul>

    </div>
  </header>
   )
}
export default Menu