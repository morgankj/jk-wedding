import React from "react";
import styled from "styled-components";
import { adventureArr, engagementArr } from "./ImageArray";
import GalleryPic from "./GalleryPic";




const modal = document.getElementsByClassName("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let imgs = document.getElementsByClassName("galleryPic");

Array.from(imgs).forEach(img => {
  img.onclick = function(){
    console.log("Clicked picture");
    // modal.style.display = "block";
    // modalImg.src = this.src;
    // captionText.innerHTML = this.alt;
  }
});

console.log("Img: ", imgs[0]);
// const modalPicture = document.getElementByClassName("img01");
// const captionText = document.getElementByClassName("imageCaption");


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }






export default function Gallery() {
  return (
    <StyledGallery>
      <h1>Gallery</h1>
      <h2 className="enggHeader">- Engagement Photos -</h2>
      <div className="galleryContainer">
        {engagementArr.map((obj) => (
          <GalleryPic key={obj.id} picture={obj} />
        ))}
      </div>
      <h2 className="advHeader">- Fun Adventures -</h2>
      <div className="galleryContainer">
        {adventureArr.map((obj) => (
          <GalleryPic key={obj.id} picture={obj} />
        ))}
      </div>
      <div className="imageModal">
        <span className="close">&times;</span>
        <img className="modalPicture" alt="Jon and Morgan"/>
        <div className="imageCaption"></div>
      </div>
    </StyledGallery>
  );
}

const StyledGallery = styled.div`
  h2 {
    font-size: 4rem;
  }
  .enggHeader {
    color: #606c38;
  }
  .advHeader {
    margin-top: 2%;
    color: #bc6c25;
  }
  .galleryContainer {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .imageModal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  }
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #fefae0;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }
  .close:hover,
  .close:focus {
    color: #dda15e;
    text-decoration: none;
    cursor: pointer;
  }
`;
