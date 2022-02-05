import '../css/travel.css'
import Menu from '../contents/menu'
import Footer from '../contents/footer'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Amplify from '../js/amplify'
import course from '../data/course'


function Travel() {

useEffect(() => {
AOS.init({
duration : 1000
});
});

let [busan, setBusan ] = useState(course)


return(
<>

	<Menu></Menu>

	{/* <!-- Main-img & Title--> */}
	<section class="about-us" data-aos="fade-right" data-aos-duration="1000">

		<div class="bg">
			<div class="text">
				<p>Traveling to Busan</p>
			</div>
			<div class="wrapper">
				<div class="about-img">
					{/* <!-- Amplify--> */}
					<div class="preview-wrap" onLoad={Amplify}>
						<div class="zoom">
							<img src="./assets/amplify/s-img.jpg" alt="" />
						</div>
					</div>
					{/* <!-- Amplify -end--> */}
				</div>
				<div class="about-text" data-aos="fade-left" data-aos-duration="1000">
					<h2>{busan[0].title}</h2>
					<p>{busan[0].text}</p>
				</div>
			</div>
		</div>
	</section>
		{/* <!-- Main-img & Title end--> */}




</>
)
}

export default Travel