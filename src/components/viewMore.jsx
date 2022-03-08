import React from "react";
import UploadForm from "../js/UploadForm";
import ImageGrid from "../js/ImageGrid";
import Modal from "../js/Modal";
import MoreTitle from "../js/moreTitle";
import { useState } from "react";

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

  export default ViewMore