import { useEffect, useState } from "react"
import Menu from "../contents/menu"
import '../css/accommodation.css'
import Taps from "../js/taps"
// import Footer from "../contents/footer"
import price from "../data/price"

function Accommodation() {

useEffect( ()=> {
Taps()
},[])

let [hotel, setHotel] = useState(price)

return (
<>
	{/*
	<!--Logo and DropDown--> */}
	<Menu></Menu>
	{/*
	<!--Logo and DropDown end--> */}

	{/* Background */}
	<div className="bg">

		{/* Price */}
		<section className="main">
			<div className="main__box" id="nuestro_menu">
				<div className="sub-title">
					<div className="text">
						<h2>PRICE</h2>
					</div>
				</div>

				<div className="container">
					<div className="container__menu">

						<img src="./images/Separador_popu.png" alt="" />

						<ul id="menu__select" className="menu">
							<li>
								<a href="#postres">HOTEL</a>
							</li>
							<li>
								<a href="#cafes">RESORT</a>
							</li>
						</ul>

						<div id="menu__text" className="text">
							<div id="postres">
							<div class="item">
                  <div class="title sub">
                    <h3>호텔 카푸치노</h3>
                    <p>9호선 신논현역과 언주역 사이에 위치한 강남빌딩 숲 사이에...</p>
                  </div>
                  <div class="price">
                    <p class="precio">77,000~</p>
                  </div>
                </div>

                <div class="item">
                  <div class="title sub">
                    <h3>신라스테이 역삼</h3>
                    <p>합리적인 가격에 신라호텔의 가치를 경험할 수 있는 호텔이다.</p>
                  </div>
                  <div class="price">
                    <p class="precio">80,500~</p>
                  </div>
                </div>

                <div class="item">
                  <div class="title sub">
                    <h3>파인 아트 라벨</h3>
                    <p>전객실 오션뷰 전망으로 아름다운 안목해변의 전경을 객실에서 감상하실수 있으며, 강릉의 명소인 안목커피거리가 5분거리에 위치하고 있어 강릉의 로컬을 느낄 수 있다.</p>
                  </div>
                  <div class="price">
                    <p class="precio">160,000~</p>
                  </div>
                </div>

                <div class="item">
                  <div class="title sub">
                    <h3>오션투유리조트 설악비치호텔</h3>
                    <p>삼포해수욕장 도보 5분 거리에 위치해 바다를 즐기기 좋으며, 넓은 마당에서 야외 바베큐 가능</p>
                  </div>
                  <div class="price">
                    <p class="precio">149.900~</p>
                  </div>
                </div>

                <div class="item">
                  <div class="title sub">
                    <h3>그랜드 인투라온 호텔 정선</h3>
                    <p>산속에 위치하여 자연의 아름다움을 조망하며 편안하고 쾌적한 휴식을 할 수 있는 호텔입니다. 모던하고 깔끔한 디자인의 외관과 청결하고 깔끔한 객실이 준비되어 있다.</p>
                  </div>
                  <div class="price">
                    <p class="precio">159,900~</p>
                  </div>
                </div>

                <div class="item">
                  <div class="title sub">
                    <h3>에어스카이 호텔</h3>
                    <p>수려한 녹음, 푸른 하늘과 드넓은 바다가 숨쉬는 곳, 푸른 인천 바다와 맞닿은 편안한 호텔이다.</p>
                  </div>
                  <div class="price">
                    <p>90,000~</p>
                  </div>
                </div>
							</div>

							<div id="cafes">
								<div className="item">
									<div className="title sub">
										<h3>베어스타운 리조트</h3>
										<p>국내레저업계 최초 ISO 인증과 고객을 위한 품질 및 서비스 중심의 리조트입니다</p>
									</div>
									<div className="price">
										<p className="precio">189,000~</p>
									</div>
								</div>

								<div className="item">
									<div className="title sub">
										<h3>소노휴 양평</h3>
										<p>남한 강변을 따라 드라이브하기에 알맞은 곳으로 서울에서 불과 30분 거리에 있는 가벼운 여행지 입니다.</p>
									</div>
									<div className="price">
										<p className="precio">223,000~</p>
									</div>
								</div>

								<div className="item">
									<div className="title sub">
										<h3>한화리조트 용인 베잔송</h3>
										<p>서울에서 1시간 반이면 도착할 수 있는 편리한 접근성이 강점인 리조트입니다.</p>
									</div>
									<div className="price">
										<p className="precio">202,000~</p>
									</div>
								</div>

								<div className="item">
									<div className="title sub">
										<h3>썬밸리호텔 여주</h3>
										<p>남한강이 흐르는 대자연 속에 위치한 모던하면서 예술적 감각이 넘치는 호텔입니다. 호텔 내 레스토랑, 워터파크, 실내골프연습장 등 다양한
											편의시설을 갖추고 있습니다.</p>
									</div>
									<div className="price">
										<p className="precio">150,000~</p>
									</div>
								</div>

								<div className="item">
									<div className="title sub">
										<h3>랜딩관 제주신화월드 리조트</h3>
										<p>신화테마파크와 신화워터파크 바로 옆에 위치하여 제주신화월드의 모든 부대시설을 이용하기에 매우 편리한 접근성을 가지고 있습니다. </p>
									</div>
									<div className="price">
										<p className="precio">308,000~</p>
									</div>
								</div>

								<div className="item">
									<div className="title sub">
										<h3>제주 아모렉스 리조트</h3>
										<p>공항과 인접한 호텔로 바다 바로 앞에 위치해 저녁에 산책하기 좋은 호텔입니다.</p>
									</div>
									<div className="price">
										<p className="precio">45,000~</p>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	{/* Price end */}



</>
)
}




export default Accommodation