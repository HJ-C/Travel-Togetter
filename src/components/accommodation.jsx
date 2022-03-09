import { useEffect, useState } from "react"
import '../css/Accommodation.css'
import Taps from "../js/taps"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from "../contents/footer"
import hotelPrice from "../data/hotelPrice"
import resortPrice from "../data/resortPrice"
import explore from "../data/explore"
import Menu from "../contents/menu"


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
let [review, setReview] = useState(explore)

return (
<>
	<Menu></Menu>
	
	{/* Background */}
	<div className="bg" style={ {backgroundImage : 'url(/assets/bg-blog-image.jpg)' } }>
		
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
			{
				review.map( (a,i) => <Explore review={review} i={i}></Explore> )
			}
			</div>
		</div>
	</div>
</section>
	{/* <!-- items end--> */}

	<Footer></Footer>
</div>
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

function Explore(props) {
	return (
		<div class="item" data-aos="zoom-in" data-aos-duration="800">
		<div class="item-img">
			<img src={"/assets/accommodation/rv-" + (props.i+1) +".jpg"}/>
		</div>
		<div class="item-text">
			<h3>{props.review[props.i].title}</h3>
			<p>{props.review[props.i].text}</p>
		</div>
	</div>
	)
}

export default Accommodation