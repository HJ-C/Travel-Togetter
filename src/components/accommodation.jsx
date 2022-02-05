import { useEffect, useState } from "react"
import Menu from "../contents/menu"
import '../css/accommodation.css'
import Taps from "../js/taps"
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Footer from "../contents/footer"
import hotelPrice from "../data/hotelPrice"
import resortPrice from "../data/resortPrice"


function Accommodation() {

useEffect( ()=> {
Taps()
},[])

useEffect(() => {
	AOS.init({
			duration : 1000
	});
});

let [room, setRoom] = useState(hotelPrice)
let [room1, setRoom1] = useState(resortPrice)

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
								{
								room.map( (a,i) => <Hotel room={room} i={i}></Hotel> )
								}
							</div>

							<div id="cafes">
								{
								room.map( (a,i) => <Resort room1={room1} i={i}></Resort> )
								}
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	</div>
	{/* Price end */}

	{/* <!-- items --> */}

<div class="sub-title1">
	<div class="text">
		<h2>REVIEW</h2>
	</div>
</div>
<section class="item-section">
	<div class="product">
		<div class="items__list">

			<div class="items">

				<div class="item" data-aos="zoom-in" data-aos-duration="800">
					<div class="item-img">
						<img src="/assets/accommodation/rv-1.jpg"/>
					</div>
					<div class="item-text">
						<h3>호텔 카푸치노</h3>
						<p>호텔카푸치노는 반려견과가기에 너무좋은 숙소입니다.
							그냥 반려동반가능이 아니라 히노끼탕대여가능 계단포함 밥그릇및식기 포함 무엇보다 1층에서는 강아지용 라떼도 판매중이셧어요. 그리고 마음에들었던 것은 도보2분안에 아주작은 공원이 있는데 반려견이 잠시 배변을 할수있어서 엄청좋았어요.</p>
					</div>
				</div>

				<div class="item" data-aos="zoom-in" data-aos-duration="800">
					<div class="item-img">
						<img src="/assets/accommodation/rv-2.jpg"/>
					</div>
					<div class="item-text">
						<h3>파인 아트 라벨</h3>
						<p>1. 가격대비 뷰가 좋음
							2. 해변가랑 가까움
							3. 안목커피거리 가까움
							4. 로비가 정말 이쁨
							5. 객실내 보일러 가동 중이라서 바닥이 따뜻함
							6. 24시간 편의점
							</p>
					</div>
				</div>

				<div class="item" data-aos="zoom-in" data-aos-duration="800">
					<div class="item-img">
						<img src="/assets/accommodation/rv-3.jpg"/>
					</div>
					<div class="item-text">
						<h3>에어스카이 호텔</h3>
						<p>평일 숙박이라 그런지 고층으로 배정받아서 좋았습니다. 밤 12시 넘어서 체크인 했는데도 큰 불편 없었고 객실 내부는 넓진 않아도 깔끔했습니다.
							주차는 늦게가서 그런지 만차였지만 근처에 차 댈 곳은 많아서 크게 상관 없었습니다.
							건물 내부 편의점이 큰편이라 좋았고 음식 종류가 엄청 많았습니다.</p>
					</div>
				</div>

				<div class="item" data-aos="zoom-in" data-aos-duration="800">
					<div class="item-img">
						<img src="/assets/accommodation/rv-4.jpg"/>
					</div>
					<div class="item-text">
						<h3>썬밸리호텔 여주</h3>
						<p>부족한것이나 불편함 없이 잘 쉬었습니다. 혼자 쓰기엔 충분히 넓은 공간이었습니다. 3명이 써도 괜찮을 룸이에요. 구스이불 폭신했구요 남한강과 아침일출을 침대에서 볼수 있었어요. 반대편 객실은 강위로 해지는 풍경을 감상할 수 있겠네요.</p>
					</div>
				</div>

				<div class="item" data-aos="zoom-in" data-aos-duration="800">
					<div class="item-img">
						<img src="/assets/accommodation/rv-5.jpg"/>
					</div>
					<div class="item-text">
						<h3>제주 아모렉스 리조트</h3>
						<p>여름에 방문 후 재방문입니다
							공항과 가깝고 시설도 훌륭합니다
							가성비 좋은 숙소를 원하시면 강추합니다
							여름에는 수영장도 운영 중이라 정말 좋았습니다
							청소 상태도 좋으며 숙소에 cu가 있어 멀리 나가지 않아도 물건을 구매 할 수 있어 무엇보다 좋았습니다
							숙소 앞 해안도로에서 걷다보면 멋진 석양을 만나실 수 있습니다
							사진 맛집이라 관광객들이 많이 옵니다</p>
					</div>
				</div>

				<div class="item" data-aos="zoom-in" data-aos-duration="800">
					<div class="item-img">
						<img src="/assets/accommodation/rv-6.jpg"/>
					</div>
					<div class="item-text">
						<h3>소노휴 양평</h3>
						<p>가족과 다시 한 번 가고싶은 리조트에요.
							객실이 연식이 있지만 방온도도 숙면을 취하기 딱 좋았구요. 수압도 세서 기분좋게 샤워했네요.
							무엇보다 불멍을 아무 준비없이 할 수 있다는점.
							아침에도 커피와함께 단풍을 즐기며 힐링했답니다.</p>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
	{/* <!-- items end--> */}

</>
)
}

function Hotel(props) {
return (
<div class="item">
	<div class="title sub">
		<h3>{props.room[props.i].title}</h3>
		<p>{props.room[props.i].text}</p>
	</div>
	<div class="price">
		<p class="precio">{props.room[props.i].price}</p>
	</div>
</div>
)
}

function Resort(props) {
return (
<div class="item">
	<div class="title sub">
		<h3>{props.room1[props.i].title}</h3>
		<p>{props.room1[props.i].text}</p>
	</div>
	<div class="price">
		<p class="precio">{props.room1[props.i].price}</p>
	</div>
</div>
)
}

function explore() {
	return (
		<div class="item" data-aos="zoom-in" data-aos-duration="800">
		<div class="item-img">
			<img src="/assets/accommodation/rv-1.jpg"/>
		</div>
		<div class="item-text">
			<h3>호텔 카푸치노</h3>
			<p>호텔카푸치노는 반려견과가기에 너무좋은 숙소입니다.
				그냥 반려동반가능이 아니라 히노끼탕대여가능 계단포함 밥그릇및식기 포함 무엇보다 1층에서는 강아지용 라떼도 판매중이셧어요. 그리고 마음에들었던 것은 도보2분안에 아주작은 공원이 있는데 반려견이 잠시 배변을 할수있어서 엄청좋았어요.</p>
		</div>
	</div>
	)
}

export default Accommodation