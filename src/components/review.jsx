import Footer from "../contents/footer"
import '../css/review.css'
import rvData from '../data/review.js'
import { useState } from "react"
import {Link} from 'react-router-dom'
import Menu from "../contents/menu"
import axios from 'axios'


function Review() {

        
let [rv, setRv] = useState(rvData)

return (
<>

    <Menu></Menu>
    {/*
    <!--REVIEW & Blog--> */}
    <div className="blog" style={ {backgroundImage : 'url(/assets/bg-blog-image.jpg)' } }>
        <div className="container">
            <p className="title"><i className="fas fa-coffee"></i>REVIEW & BLOG</p>
            <h1>REVIEW & BLOG</h1>


            <div className="boxs" key={rv.id}>
                {
                    rv.map( (a,i) => { return <Blog rv={rv} i={i}></Blog>
                    })
                }
            </div>

            <button className="more" onClick={ ()=> {
                axios.get('https://gist.githubusercontent.com/HJ-C/65887cdd438b86906665679c922d4126/raw/b2d138afc7004e4228fa901da27556e3e9e1a391/gistfile1.txt')
                .then( (res)=> {
                    console.log(res.data)
                    setRv( [...rv, ...res.data] )
                })
                .catch(()=> {
                    console.log('실패')
                })
            }}>See All</button>
            
        </div>


        {/* FOOTER */}
        <Footer></Footer>
        {/* FOOTER end */}

    </div>
    
</>

)
}


function Blog(props) {
    return (
        <div className="box">
            <div className="image">
                <img src={"/assets/review/blog"+(props.i+1) +".jpg"} alt="" />
            </div>
            <h3>{props.rv[props.i].title}</h3>
            <p className="text-p">{props.rv[props.i].text}</p>
            <p>Read More </p>
            <div className="comment">
                <span><i className="far fa-folder-open"></i> Espresso</span>
                <span><i className="far fa-comment-alt"></i> Comments(0)</span>
            </div>
        </div>
    )
}


export default Review
