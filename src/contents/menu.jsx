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
          <a href="./accommodation.html">
            <div className="item__name">숙소</div>
          </a>
        </li>
        <li className="item">
          <a href="./review.html">
            <div className="item__name">갤러리</div>
          </a>
        </li>
        <li className="item">
          <a href="Travel.html">
            <div className="item__name">여행</div>
          </a>
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