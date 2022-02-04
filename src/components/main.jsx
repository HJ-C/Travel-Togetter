import start from '../js/slider'
import Typing from '../js/typing'
import '../css/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import Menu from '../contents/menu'
import Footer from '../contents/footer'

function Main() {

  useEffect(() => {
    AOS.init({
        duration : 1000
    });
  });


  return (
    <>

{/* <!--Logo and DropDown--> */}
    <Menu></Menu>
{/* <!--Logo and DropDown End--> */}

{/* Main Image */}
  
  <section className="home text-uppercase" onLoad={start}>
        <div className="home-bg" style={ {backgroundImage:'url(/assets/main/bg0.jpg)'} }>
        <div>
          <img className="img-text" src="/assets/main/bg-text.png"></img>
        </div>
        <div className="home-caption w-75 m-auto text-center">
          <h3>SEARCH YOUR NEXT DESTINATION</h3>
          <div className="wrap" onLoad={Typing}>
            <h1 id="dynamic" className="lg-text" >TRAVEL</h1>
          </div>
        </div>
        </div>
  </section>
{/* Main Image end */}



{/*  Slide */}
  <section className="slide">
    <section className="slide__list" id="slide__list">
      <div className="slide__container">
        <div className="col img">
          <div className="slider" id="slider">
            <div className="slide foto1" style={ {backgroundImage : 'url(/assets/main/bg3.jpg)'}}></div>
            <div className="slide foto1" style={ {backgroundImage : 'url(/assets/main/bg4.jpg)'}}></div>
            <div className="slide foto1" style={ {backgroundImage : 'url(/assets/main/bg5.jpg)'}}></div>
          </div>
        </div>
        <div className="col">
          <div className="slide__text">
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


{/* <!-- Background Img --> */}
  <section>
    <div className="bg-img1" style={ {backgroundImage : 'url(/assets/main/bg1.jpg)'}}></div>
    <div className="bg-img2" style={ {backgroundImage : 'url(/assets/main/bg2.jpg)'}}></div>
  </section>
{/* <!-- Background Img end --> */}

{/* <!-- Gallery --> */}
  <section className="gallery">
    <div className="wrapper">
      <div className="text">
        <h2>Hot Place</h2>
      </div>
      <div className="photo-grid">
        <div className="photo" data-aos="fade-up" data-aos-duration="1000">
          <video src="./video/video2.mp4"  width="700px" height="500px"></video>
        </div>
        <div className="photo" data-aos="fade-up" data-aos-duration="1000">
          <img src="/assets/main/gal-img1.jpg"></img>
        </div>
        <div className="photo" data-aos="fade-up" data-aos-duration="1000">
          <img src="/assets/main/gal-img2.jpg"/>
        </div>
        <div className="photo" data-aos="fade-up" data-aos-duration="1000">
          <video src="./video/video1.mp4" width="700px" height="500px"></video>
        </div>
        <div className="photo" data-aos="fade-up" data-aos-duration="1000">
          <img src="/assets/main/gal-img3.jpg"/>
        </div>
        <div className="photo" data-aos="fade-up" data-aos-duration="1000">
          <img src="/assets/main/gal-img4.jpg"/>
        </div>
        <div className="photo" data-aos="fade-up" data-aos-duration="1000">
          <video src="./video/video2.mp4" width="700px" height="500px"></video>
        </div>
        <div className="photo" data-aos="fade-up" data-aos-duration="1000">
          <img src="/assets/main/gal-img5.jpg"/>
        </div>
        <div className="photo" data-aos="fade-up" data-aos-duration="1000">
          <img src="/assets/main/gal-img6.jpg"/>
        </div>
      </div>
    </div>
  </section>
{/* <!-- Gallery end --> */}

{/* <!--FOOTER--> */}
<Footer></Footer>
{/* <!--FOOTER end--> */}



    </>
    )
}
export default Main