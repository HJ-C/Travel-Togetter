import '../css/main.css'
import start from '../js/slider'

function Main() {
  return (
    <>

{/* <!--Logo and DropDown--> */}
  <header>
    <div class="inner">

      <a href="/" class="logo">
        <img src="./images/main/logo.png" alt="Trip" />
      </a>

      <div class="sub-menu">
        <ul class="menu">
          <li>
            <a href="/signin">Sign In</a>
          </li>
          <li>
            <a href="javascript:void(0)">My Blog</a>
          </li>
          <li>
            <a href="javascript:void(0)">Service</a>
          </li>
          <li>
            <a href="javascript:void(0)">Find</a>
          </li>
        </ul>
        <div class="search">
          <input type="text" />
          <span class="material-icons">search</span>
        </div>
      </div>

      <ul class="main-menu">
        <li class="item">
          <a href="./accommodation.html">
            <div class="item__name">숙소</div>
          </a>
        </li>
        <li class="item">
          <a href="./review.html">
            <div class="item__name">갤러리</div>
          </a>
        </li>
        <li class="item">
          <a href="Travel.html">
            <div class="item__name">여행</div>
          </a>
        </li>
        <li class="item">
          <div class="item__name">소개</div>
        </li>
      </ul>

    </div>
  </header>
{/* <!--Logo and DropDown End--> */}

{/* Main Image */}
  
  <section class="home text-uppercase" onLoad={start}>
        <div class="home-bg" style={ {backgroundImage:'url(/assets/main/bg0.jpg)'} }>
        <div>
          <img class="img-text" src="/assets/main/bg-text.png"></img>
        </div>
        <div class="home-caption w-75 m-auto text-center">
          <h3>SEARCH YOUR NEXT DESTINATION</h3>
          <div class="wrap">
            <h1 id="dynamic" class="lg-text"></h1>
          </div>
        </div>
        </div>
  </section>
{/* Main Image end */}

{/*  Slide */}
  <section class="slide">
    <section class="slide__list" id="slide__list">
      <div class="slide__container">
        <div class="col img">
          <div class="slider" id="slider">
            <div class="slide foto1" style={ {backgroundImage : 'url(/assets/main/bg3.jpg)'}}></div>
            <div class="slide foto1" style={ {backgroundImage : 'url(/assets/main/bg4.jpg)'}}></div>
            <div class="slide foto1" style={ {backgroundImage : 'url(/assets/main/bg5.jpg)'}}></div>
          </div>
        </div>
        <div class="col">
          <div class="slide__text">
            <h2>Tradition in history</h2>
            <p>
              한국은 관광자원이 풍부하다. 또한 전통문화와 현대문화가 공존해 관광객이 여러 가지 경험을 할 수 있으며 지역마다 정체성이 뚜렷해 다양한 문화와 자연환경, 먹거리를 즐길 수 있다.
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
{/*  Slide end*/}
    
    </>
    )
}
export default Main