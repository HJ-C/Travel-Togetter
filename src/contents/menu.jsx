import React from "react"
import {Link, useNavigate} from 'react-router-dom'


function Menu(props) {
  
  const {handleLogout} = props
  let navigate = useNavigate()
  

   return (
    <header>
      <div className="inner">
      <a href="/" className="logo">
        <img src="./assets/main/logo.png" alt="Trip" />
      </a>

      <div className="sub-menu">
        <ul className="menu">
          <li onClick={handleLogout}>
            <Link to="">Log-out</Link>
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
           <Link to="./moretitle">
              <div className="item__name">더 보기</div>
            </Link>
        </li>
      </ul>

    </div>
  </header>
   )
}
export default Menu