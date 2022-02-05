import '../css/travel.css'
import Menu from '../contents/menu'
import Footer from '../contents/footer'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Amplify from '../js/amplify'
import course from '../data/course'
import imgLink from '../data/imgLink'


function Travel() {

useEffect(() => {
AOS.init({
duration : 1000
});
});

let [busan, setBusan ] = useState(course)
let [imgs, setImgs] = useState(imgLink)


return(
<>
	<div id="bg" style={{backgroundImage:"url('/assets/bg-blog-image.jpg')"}}>
		<Menu></Menu>

		{/* Main-img & Title*/}
		<section class="about-us" data-aos="fade-right" data-aos-duration="1000">
			<div class="text">
				<p>Traveling to Busan</p>
			</div>
			<div class="wrapper">
				<div class="about-img">

					{/* Amplify */}
					<div class="preview-wrap" onLoad={Amplify}>
						<div class="zoom">
							<img src="./assets/travel/s-img.jpg" alt="" />
						</div>
					</div>
					{/* Amplify -end */}

				</div>
				<div class="about-text" data-aos="fade-left" data-aos-duration="1000">
					<h2>{busan[0].title}</h2>
					<p>{busan[0].text}</p>
				</div>
			</div>
		</section>
		{/* Main-img & Title end */}

		{/* Sub-title */}
		<div class="text1">
			<p>WHERE TO NEXT?</p>
		</div>
		{/* Sub-title end*/}

		{/* More */}
		<section class="imgs">
			<div id="bg" style={{backgroundImage:"url('/assets/bg-blog-image.jpg')"}}>
				<Moreimg imgs={imgs}></Moreimg>
			</div>
		</section>
		{/* More end */}

    {/* FOOTER */}
    <Footer></Footer>
    {/* FOOTER end */}

	</div>

</>
)
}

function Moreimg(props) {
return (
<div class="img-contents">
	<div class="col">
		<div><img src={props.imgs[0].link} alt="" /></div>
		<div><img src={props.imgs[1].link} alt="" /></div>
		<div><img src={props.imgs[2].link} alt="" /></div>
	</div>
	<div class="col">
		<div><img src={props.imgs[3].link} alt="" /></div>
		<div><img src={props.imgs[4].link} alt="" /></div>
		<div><img src={props.imgs[5].link} alt="" /></div>
	</div>
	<div class="col">
		<div><img src={props.imgs[6].link} alt="" /></div>
		<div><img src={props.imgs[7].link} alt="" /></div>
		<div><img src={props.imgs[8].link} alt="" /></div>
	</div>
</div>
)
}



export default Travel