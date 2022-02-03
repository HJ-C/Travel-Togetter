import Menu from "../contents/menu"
import Footer from "../contents/footer"
import '../css/review.css'
import rvData from '../data/review.js'
import { useState } from "react"

function Review() {

    let [rv, setRv] = useState(rvData)

    return (
        <>
        <Menu></Menu>
        
        {/* <!--REVIEW & Blog--> */}
        <div  className="blog"  style={ {backgroundImage : 'url(/assets/bg-blog-image.jpg)'} }>
            <div  className="container">
                <p  className="title"><i  className="fas fa-coffee"></i>REVIEW & BLOG</p>
                <h1>REVIEW & BLOG</h1>
                <img  className="s-img" src="/assets/Separador_popu.png"/>
                <div  className="boxs">
    
                    <div  className="box">
                        <div  className="image">
                            <img src="/assets/review/blog1.jpg" alt=""/>
                        </div>
                        <h3>{rv[0].title}</h3>
                        <p  className="text-p">{rv[0].text}</p>
                        <p>Read More </p>

                            <div  className="comment">
                                <span><i  className="far fa-folder-open"></i> Espresso</span>
                                <span><i  className="far fa-comment-alt"></i> Comments(0)</span>
                            </div>
                    </div>
    
                    <div  className="box">
                        <div  className="image">
                            <img src="/assets/review/blog2.jpg" alt=""/>
                        </div>
                        <h3>{rv[1].title}</h3>
                        <p  className="text-p">{rv[1].text}</p>
                        <p>Read More</p>
                        <div  className="comment">
                            <span><i  className="far fa-folder-open"></i> Espresso</span>
                            <span><i  className="far fa-comment-alt"></i> Comments(0)</span>
                        </div>
                    </div>
    
                    <div  className="box">
                        <div  className="image">
                            <img src="/assets/review/blog3.jpg" alt=""/>
                        </div>
                        <h3>{rv[2].title}</h3>
                        <p  className="text-p">{rv[2].text}</p>
                        <p>Read More >></p>
                        <div  className="comment">
                            <span><i  className="far fa-folder-open"></i> Espresso</span>
                            <span><i  className="far fa-comment-alt"></i> Comments(0)</span>
                        </div>
                    </div>
                </div>
                <a href="#">SEE All </a>
            </div>


            {/* <!--FOOTER--> */}
            <Footer></Footer>
            {/* <!--FOOTER end--> */}

        </div>
        </>
    
    )
}
export default Review

