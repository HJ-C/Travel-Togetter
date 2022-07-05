import React from "react";
import UploadForm from "../js/UploadForm";
import ImageGrid from "../js/ImageGrid";
import { useState } from "react";
import '../css/ViewMore.css'
import Menu from "../contents/menu";
import Footer from "../contents/footer";

function ViewMore() {
    const [selectedImg, setSelectedImg] = useState(null);

    
    return (
      <div className="view"  style={ {backgroundImage : 'url(/assets/bg-blog-image.jpg)' } }>
        <Menu></Menu>
        <div className="view_wrap"> 
        <MoreTitle></MoreTitle>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg &&
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        }
        <Footer></Footer>
        </div>
      </div>
  
    );
  }

function MoreTitle() {
    return (
        <div className="title">
          <h2>Your Pictures</h2>
          <p>If you have a photo you want to leave, please register it here.</p>
        </div>
      )
}

function Modal({ setSelectedImg, selectedImg }){

    const handleClick = (e) => {
      if (e.target.classList.contains('backdrop')) {
        setSelectedImg(null);
      }
    }
  
    return (
      <div className='backdrop' onClick={handleClick}>
        <img src={selectedImg} alt='pic'></img>  
      </div>
    )
}



export default ViewMore