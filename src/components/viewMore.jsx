import React from "react";
import UploadForm from "../js/UploadForm";
import ImageGrid from "../js/ImageGrid";
import { useState } from "react";
import '../css/viewMore.css'

function ViewMore() {
    const [selectedImg, setSelectedImg] = useState(null);
  
    return (
      
      <div className="App">
        <MoreTitle></MoreTitle>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg &&
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        }
      </div>
  
    );
  }

function MoreTitle() {
    return (
        <div className="title">
          <h1>FireGram</h1>
          <h2>Your Pictures</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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